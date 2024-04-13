import { GenezioDeploy } from "@genezio/types";
import { TwitterApi } from "twitter-api-v2";
@GenezioDeploy()
export class Twitter {
  private twitterClient: TwitterApi;
  private readOnlyClient;
  constructor() {
    this.twitterClient = new TwitterApi({
      appKey: "qnmaXEmwHIF9Eqei0XMv7X0Qe",
      appSecret: "YnXBy5z2XUpBLHSua9eIoLoMbLg7PPkaXvh73gT7IYbHYxBtsE",
      accessToken: "3903822798-n0bcLqRoRAqkHtSFAUDnPFBr4mcP8wd77ebjZR9",
      accessSecret: "sGYi5PDRk10ZznOqMvYa38sfFs8aBNmCKKcVscsgv9Pym",
    });

    // Tell typescript it's a readonly app
    this.readOnlyClient = this.twitterClient.readOnly;
  }

  // async postTweet(tweetText: string) {
  //   try {
  //     const tweet = await this.twitterClient.v2.tweet(tweetText);
  //     console.log(`Tweet posted with ID ${tweet.data.id}`);
  //   } catch (error) {
  //     console.error(`Failed to post tweet: ${error}`);
  //   }
  // }
  async postTweet(tweetText: string) {
    try {
      const tweet = await this.twitterClient.v2.tweet(tweetText);
      console.log(`Tweet posted with ID ${tweet.data.id}`);
      return 0;
    } catch (error) {
      console.log(error);
      console.error(`Failed to post tweet: ${error}`);
      return 1;
    }
  }
  // async test() {
  //   try {
  //     console.log("test...");
  //     // await this.readOnlyClient.v2.userByUsername('plhery');
  //     await this.twitterClient.v2.tweet("This is a test");
  //     return 0;
  //   } catch (error) {
  //     console.log(error);
  //     return 1;
  //   }
  // }
}
