import { GenezioDeploy } from "@genezio/types";
import { TwitterApi } from "twitter-api-v2";
@GenezioDeploy()
export class Twitter {
  private twitterClient: TwitterApi;
  private readOnlyClient;
  constructor() {
    // this.twitterClient = new TwitterApi({
    //   appKey: "qnmaXEmwHIF9Eqei0XMv7X0Qe",
    //   appSecret: "YnXBy5z2XUpBLHSua9eIoLoMbLg7PPkaXvh73gT7IYbHYxBtsE",
    //   accessToken: "3903822798-n0bcLqRoRAqkHtSFAUDnPFBr4mcP8wd77ebjZR9",
    //   accessSecret: "sGYi5PDRk10ZznOqMvYa38sfFs8aBNmCKKcVscsgv9Pym",
    // });
    this.twitterClient = new TwitterApi({
      appKey: "zaK6zyUOHmBRffLQsz48OiBB6",
      appSecret: "j2PnstAcN5m1B58xQ4CSRH6Sev8d9PKGlS38CJ8EpOYTMnSeTw",
      accessToken: "1779182497764372480-b9L8yCNSbMaPwkyUh2vkHsa5hvDuYI",
      accessSecret: "OAYB7FStyOqqWGOLBfU1GZH1uD12eSwETua8LrLHzuP4l",
    });
    // this.twitterClient = new TwitterApi({
    //   username: "cevacevadetest@gmail.com",
    //   password: "auleusufletu1",
    // });
    this.readOnlyClient = this.twitterClient.readOnly;
  }

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
  async mediaTweet() {
    try {
      // Create mediaID
      const mediaId = await this.twitterClient.v1.uploadMedia(
        "../../hackaton/client/src/assets/S1.png"
      );

      await this.twitterClient.readWrite.v2.tweet({
        text: "Twitter is a fantastic social network. Look at this:",
        media: { media_ids: [mediaId] },
      });
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  }
}
