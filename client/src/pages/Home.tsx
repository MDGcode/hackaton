import Sidenav from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Sidenav />
      <div className=" w-screen h-screen bg-gradient-to-tr from-[#524AA4] to-[#3B3199]">
        <div className="grid place-items-center ">
          <h1 className="text-gray-100 font-bold text-5xl pt-16 font-istok">
            SocialHub
          </h1>
          <div className=" grid place-items-center ml-60">
            <div className="w-full ">
              <h2 className="  text-gray-100 font-bold text-3xl pt-16 font-istok">
                Target Audiance
              </h2>
              <p className="  text-gray-100  text-lg pt-6 font-istok">
                This platform is addressing to every content creator and
                business people who want to manage multiple social media
                platforms.
              </p>
            </div>
            <div className="w-full ">
              <h2 className="  text-gray-100 font-bold text-3xl pt-16 font-istok">
                Our aim
              </h2>
              <p className=" text-left  text-gray-100  text-lg pt-6 font-istok w-full">
                Our aim is to ease the work of managing posts and followers.
              </p>
            </div>
            <div className="w-full ">
              <h2 className="  text-gray-100 font-bold text-3xl pt-16 font-istok">
                Future plans
              </h2>
              <p className=" text-left  text-gray-100  text-lg pt-6 font-istok w-3/4">
                In the future we plan to implement more functions for our users.
                A few examples would be: more options for the apps that we have,
                support for new apps and many more to come.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
