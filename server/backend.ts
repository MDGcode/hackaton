import { GenezioDeploy, GenezioMethod } from "@genezio/types";
import { IgApiClient } from "instagram-private-api";
import { promisify } from "util";
import { readFile } from 'fs';
const readFileAsync = promisify(readFile);

@GenezioDeploy()
export class BackendService {

  private ig;
  private timesFunctionRun;

  constructor() {
    this.ig = new IgApiClient();
    this.timesFunctionRun = 0;
  }

  @GenezioMethod({ type: "cron", cronString: "* * * * *" })
    sayHiEveryMinute() {
        console.log(`${this.timesFunctionRun++} I will run every minute!`);
    }

  async login() {
    this.ig.state.generateDevice("alexandru.georgescu22@gmail.com");
    await this.ig.account.login("alexandru.georgescu22@gmail.com", "@lex@ndru22");
  }

  async UploadPhoto(captionString: string) {
    try{
      this.ig.state.generateDevice("alexandru.georgescu22@gmail.com");
      
      await this.ig.simulate.preLoginFlow();
      const loggedInUser = await this.ig.account.login("alexandru.georgescu22@gmail.com", "@lex@ndru22");

      process.nextTick(async () => await this.ig.simulate.postLoginFlow());

      const userFeed = this.ig.feed.user(loggedInUser.pk);
      
      const path = "../client/src/assets/test.jpg";

      const { latitude, longitude, searchQuery } = {
        latitude: 0.0,
        longitude: 0.0,
        searchQuery: "place"
      };

    const locations = await this.ig.search.location(latitude, longitude, searchQuery);

    const mediaLocation = locations[0];
    console.log(mediaLocation);
  
    await this.ig.publish.photo({
      // read the file into a Buffer
      file: await readFileAsync(path),
      // optional, default ''
      caption: captionString,
      // optional
      location: mediaLocation,
    });

  return readFileAsync(path);

  }catch(error){
    return error;
  } 
  }

  async UploadStory(){
    try {
      this.ig.state.generateDevice("alexandru.georgescu22@gmail.com");
      
      await this.ig.simulate.preLoginFlow();
      await this.ig.account.login("alexandru.georgescu22@gmail.com", "@lex@ndru22");

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
    }
  }


}
