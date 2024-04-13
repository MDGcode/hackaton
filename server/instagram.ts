import { GenezioDeploy } from "@genezio/types";
import { IgApiClient } from "instagram-private-api";
import { readFile } from 'fs';
import { promisify } from 'util';
const readFileAsync = promisify(readFile);

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

    async uploadPhoto(customCaption: string) {
        try {
            this.ig.state.generateDevice(`${this.instagramUser}`);
            
            await this.ig.simulate.preLoginFlow();
            await this.ig.account.login(`${this.instagramUser}`, `${this.instagramPassword}`);
            process.nextTick(async () => await this.ig.simulate.postLoginFlow());


            const path = "../client/src/assets/test.jpg";
            const { latitude, longitude } = {
                latitude: 0.0,
                longitude: 0.0,
            };

            const locations = await this.ig.search.location(latitude, longitude);

            const mediaLocation = locations[0];
            console.log(mediaLocation);

            const publishResult = await this.ig.publish.photo({
                file: await readFileAsync(path),
                caption: customCaption,
              });
            
              console.log(publishResult);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async uploadStory() {
        try {
            this.ig.state.generateDevice(`${this.instagramUser}`);
            
            await this.ig.simulate.preLoginFlow();
            await this.ig.account.login(`${this.instagramUser}`, `${this.instagramPassword}`);
            process.nextTick(async () => await this.ig.simulate.postLoginFlow());
      
            const path = "../client/src/assets/test.jpg";
            const file = await readFileAsync(path);
      
      
            
            console.log(file);
      
            const result = await this.ig.publish.story({
              file,
            });
      
            return result;
      
          } catch (error) {
            console.log(error);
            return "error";
          }
    }

}