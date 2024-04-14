import { GenezioAuth, GenezioDeploy,  GenezioMethod, GnzContext } from "@genezio/types";
import { PrismaClient } from "@prisma/client";
import { InstagramService } from "./instagram";
import { Twitter } from "./twitter/twitterClient";

export type HTTPResponse = {
  status: number;
  message: string;
}

@GenezioDeploy()
export class BackendService {
  private prisma: PrismaClient
  private ig;
  private tw;

  constructor() {
    this.prisma = new PrismaClient();
    this.ig = new InstagramService();
    this.tw = new Twitter();
  }

  async createPostByType(appType: string, postType: string, idAccount: string, idImage: number | null, text: string | null): Promise<HTTPResponse>{
    console.log("A INTRAT");
    try {
      const user = await this.prisma.accountInfo.findUnique({
        where: {userId: idAccount}
      })

      if (!user || !user.userNameIg || !user.userNamePsw){
        throw new Error("User Not Found!");
      }

      if (appType == "INSTAGRAM"){
        await this.ig.setAccount(user?.userNameIg, user?.userNamePsw);

        if (!idImage){
          throw new Error ("Please provide a image!");
        }

        const imageUrl = await this.prisma.imageStorage.findUnique({
          where: {id: idImage}
        });

        if (!imageUrl){
          throw new Error("Image is not a valid type!")
        }

        if (postType == "STORY"){

          await this.ig.uploadStory(imageUrl.url);
        }
        else if (postType == "POST"){
          if (!text){
            text = ""
          }
          await this.ig.uploadPhoto(text, imageUrl.url);
        }

        
        console.log("sunt aici");
        console.log(idImage);

        const deleteceva = await this.prisma.createPost.deleteMany({
          where: {
            idAccount: user.userId,
            idImage: idImage,
          }
        })

        console.log(deleteceva);
        

        return {
          status: 200,
          message: ""
        }

      }
        if (appType == "Twitter"){

          if (postType == "text_only"){
            console.log("ceva");
            if (!user.appKeyTwitter || !user.accessSecretTwitter || !user.accessTokenTwitter || !user.appSecretTwitter){
              throw new Error("DSAD");
            }
            await this.tw.updateTwitterAccount(user.appKeyTwitter, user.accessSecretTwitter, user.accessTokenTwitter, user.appSecretTwitter);
            console.log("dsadasda");
            if (!text){
              text = ""
            }

            this.tw.postTweet(text);

            await this.prisma.createPost.deleteMany({
              where: {
                idAccount: user.userId,
                text: text,
              }
            })
          }
        }

        return {
          status: 200,
          message: ""
        }

    } catch (error) {
      console.log(error);
      return {
        status: 401,
        message: "UNATHORIZED"
      };
    }
  }

  
  async updatePost(appType: string, typeOfPost: string, idAccount: string, idImage: number | null, text: string | null, currentDate: Date): Promise<HTTPResponse>{
    try {
      
      await this.prisma.posts.create({
        data: {
          appType: appType,
          typeOfPost: typeOfPost,
          idAccount: idAccount,
          data_ora: currentDate
        }
      })

      return {
        status: 200,
        message: ""
      }
    } catch (error) {
      console.log(error);
      return {
        status: 401,
        message: "UNATHORIZED"
      };
    }
  }

  @GenezioMethod({ type: "cron", cronString: "* * * * *" })
  async openDB(){
    try {
      const response = await this.prisma.createPost.findMany({
      })

      console.log(response);
      console.log(response.length)

      if (response.length) {
        const currentDate = new Date();
        console.log(currentDate);
        response.forEach(element => {
          if (element.data_ora.getMinutes() <= currentDate.getMinutes() && element.data_ora.getHours() <= currentDate.getHours()) {
              this.createPostByType(element.appType, element.typeOfPost, element.idAccount, element.idImage, element.text); 
              this.updatePost(element.appType, element.typeOfPost, element.idAccount, element.idImage, element.text, currentDate)
          }
        });
      }


    } catch (error) {
      console.log(`${error}`)
      return error;
    }
  }

  @GenezioAuth()
  async updateIgCredentials(context: GnzContext, username: string, password: string): Promise<HTTPResponse>{
    try {
      const user  = await this.prisma.accountInfo.findMany({
        where: {userId: context.user!.userId}
      })

      if (!user){
        throw new Error("User not found!");
      }

      await this.prisma.accountInfo.update({
        where: {userId: context.user!.userId},
        data: {
          userNameIg: username,
          userNamePsw: password
        }
      })

      return {
        status: 200,
        message: ""
      }
    } catch (error) {
      return {
        status: 400,
        message: `${error}`
      }
    }
  }

  @GenezioAuth()
  async updateTwitterCredentials(context: GnzContext, appKey: string, appSecret: string, accessToken: string, accessSecret: string): Promise<HTTPResponse>{
      try {
        const user  = await this.prisma.accountInfo.findMany({
          where: {userId: context.user!.userId}
        })
  
        if (!user){
          throw new Error("User not found!");
        }

        await this.prisma.accountInfo.update({
          where: {userId: context.user!.userId},
          data: {
            appKeyTwitter: appKey,
            appSecretTwitter: appSecret,
            accessTokenTwitter: accessToken,
            accessSecretTwitter: accessSecret
          }
        })

        return {
          status: 200,
          message: ""
        }
      } catch (error) {
        return {
          status: 400,
          message: `${error}`
        }
      }
    }

    @GenezioAuth()
    async createPost(context:GnzContext ,data_ora: Date, typeOfPost: string, appType: string, imageUrl: string, text: string): Promise<HTTPResponse> {
      try {
        const user  = await this.prisma.accountInfo.findMany({
          where: {userId: context.user!.userId}
        })
  
        if (!user){
          throw new Error("User not found!");
        }

        // Trebuie introdusa interogarea prin care imaginea sa se vada daca e un buffer valid!
        // Trebuie introdusa interogarea prin care imaginea sa se vada daca e un buffer valid!
        // Trebuie introdusa interogarea prin care imaginea sa se vada daca e un buffer valid!

        const newImage = await this.prisma.imageStorage.create({
          data: {
            url: imageUrl,
          }
        })

        const newPost = await this.prisma.createPost.create({
          data: {
            data_ora: data_ora,
            typeOfPost: typeOfPost,
            appType: appType,
            idAccount: context.user!.userId,
            idImage: newImage.id,
            text: text
          }
        })

        if(!newPost){
          throw new Error("Internal Server Error!");
        }
        
        return {
          status: 200,
          message: "",
        }
      } catch (error) {
        return {
          status: 400,
          message: `${error}`
        }
      } 
    }
  @GenezioAuth()
  async createAccount(context: GnzContext): Promise<HTTPResponse | string> {
    try{
      
      await this.prisma.accountInfo.create({
        data: {
          userId: context.user!.userId,
        },
      });

      return {
        status: 200,
        message: "Account created!",
      }
    }
    catch(error){
      console.log(error);
      return "error";
    }
  }
}
