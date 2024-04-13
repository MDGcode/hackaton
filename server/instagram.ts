import { GenezioDeploy } from "@genezio/types";
import { IgApiClient } from "instagram-private-api";
import axios from "axios";

@GenezioDeploy()
export class InstagramService {

    private ig;
    private instagramUser;
    private instagramPassword;

    constructor(){
        this.ig = new IgApiClient();

        this.instagramUser = "ceva7700";
        this.instagramPassword = "aoleusufletu1";

    }

    async setAccount(username: string, password: string){
        this.instagramUser = username;
        this.instagramPassword = password;
    }

    async login(){
        this.ig.state.generateDevice(`${this.instagramUser}`);
        await this.ig.account.login(this.instagramUser, this.instagramPassword);

    }

    async getImageBuffer(url: string){
        return (await axios.get(url, {responseType: 'arraybuffer'})).data;
    }

    async uploadPhoto(customCaption: string, imageUrl: string) {
        try {
            this.ig.state.generateDevice(`${this.instagramUser}`);
            
            await this.ig.simulate.preLoginFlow();
            await this.ig.account.login(`${this.instagramUser}`, `${this.instagramPassword}`);
            process.nextTick(async () => await this.ig.simulate.postLoginFlow());

            const data = await this.getImageBuffer(imageUrl)
            const imageBuffer = Buffer.from(data, 'binary');

            const publishResult = await this.ig.publish.photo({
                file: imageBuffer,
                caption: customCaption,
              });
            
              console.log(publishResult);
        } catch (error) {
            console.log(error);
            return error;
        }
    }


    async testst(){
        return axios.get("https://picsum.photos/800/800", {
            responseType: 'arraybuffer'
         })
        .then(response => {
            const buffer = Buffer.from(response.data, 'base64');
            return buffer;
        })
        .catch(ex => {
            console.error(ex);
        });
    }

    async uploadStory(imageUrl: string) {
        try {
            this.ig.state.generateDevice(`${this.instagramUser}`);
            
            await this.ig.simulate.preLoginFlow();
            await this.ig.account.login(`${this.instagramUser}`, `${this.instagramPassword}`);
            process.nextTick(async () => await this.ig.simulate.postLoginFlow());
  
            const data = await this.getImageBuffer(imageUrl)
            const file = Buffer.from(data, 'binary');

            const result = await this.ig.publish.story({
                file,
            });
      
            return result;
      
          } catch (error) {
            console.log(error);
            return error;
          }
    }

}