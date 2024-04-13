import { TwitterTimelineEmbed } from "react-twitter-embed";
import TweetText from "../components/TweetText";
import { Tweet } from "react-tweet";
import { Timeline } from "react-twitter-widgets";

export default function Home() {
  return (
    <>
      <TweetText />
      <TwitterTimelineEmbed
        sourceType="profile"
        userId={"1779182497764372480"}
        options={{ height: 400 }}
      />
      <Tweet id="1779217258293731722" />
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "starplus",
        }}
        options={{ height: 400 }}
      />
    </>
  );
}
