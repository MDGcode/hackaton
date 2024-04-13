import { TwitterTimelineEmbed } from "react-twitter-embed";
import TweetText from "../components/TweetText";
import Sidenav from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Sidenav />
      <div className=" w-screen h-screen bg-gradient-to-tr from-[#524AA4] to-[#3B3199]">
        <div className=" grid place-items-center">
          <TweetText />
        </div>
        <TwitterTimelineEmbed
          sourceType="profile"
          userId={"1779182497764372480"}
          options={{ height: 400 }}
        />
      </div>
    </>
  );
}
