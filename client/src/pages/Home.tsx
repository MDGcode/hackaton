import Sidenav from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Sidenav />
      <div className=" w-screen h-screen bg-gradient-to-tr from-[#524AA4] to-[#3B3199]">
        <div className="grid place-items-center ">
          <h1 className="text-gray-100 font-bold text-5xl pt-24 font-istok">
            SocialHub
          </h1>
          <div className="text-left -translate-x-32">
            <h2 className="  text-gray-100 font-bold text-3xl pt-24 font-istok">
              Post on all platforms
            </h2>
            <p className="  text-gray-100  text-lg pt-6 font-istok">
              Post on Intagram and X (Twitter) in the same time and interact
              with your followers.
            </p>
            <button className=" flex font-istok font-bold text-[#111111] p-5 bg-[#E9D141] hover:bg-[#bda834] duration-300 ease-in rounded-full mt-10">
              Schedule post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
