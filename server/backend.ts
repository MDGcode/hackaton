import { GenezioAuth, GenezioDeploy,  GenezioMethod, GnzContext } from "@genezio/types";
import { PrismaClient } from "@prisma/client";
import { InstagramService } from "./instagram";


type HTTPResponse = {
  status: number;
  message: string;
}

@GenezioDeploy()
export class BackendService {
  private prisma: PrismaClient
  private ig;

  constructor() {
    this.prisma = new PrismaClient();
    this.ig = new InstagramService();
  }

  // async createPostByType(element){
  //   switch (element.appType) {
  //     case 'INSTAGRAM':
  //       const user = await this.prisma.accountInfo.findUnique({
  //         where: {userId: element.idAccount}
  //       });

  //       if (!user){
  //         return "";
  //       }
  //       this.ig.setAccount(user?.userNameIg, user?.userNamePsw);
  //       if (typeOfPost == "STORY"){
  //         this.ig.uploadStory(idImage);
  //       }

        
  //       break;
  //     case 'TWITTER':
  //       console.log('Foarte bine!');
  //       break;
  //     default:
  //       console.log('Grade invalidă.');
  //   }
  // }

  @GenezioMethod({ type: "cron", cronString: "* * * * *" })
  async openDB(){
    try {
      const response = await this.prisma.createPost.findMany({
      })

      console.log(response);
      console.log(response.length)

      if (response.length) {
        const currentDate = new Date();
        response.forEach(element => {
          if (element.data_ora.getTime() === currentDate.getTime()) {
            if (typeof idAccount === 'string') {
              this.createPostByType(element);
            } else {
              console.error('Id-ul contului este null.');
            }
          }
        });
      }


    } catch (error) {
      console.log(`${error}`)
      return error;
    }
  }

  // @GenezioAuth()
  // async createPost(context: GnzContext){
  //   try {
      
  //   } catch (error) {
  //     return error;
  //   }
  // }

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
