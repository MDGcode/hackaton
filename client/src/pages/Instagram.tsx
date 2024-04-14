import { useState } from "react";
import Sidenav from "../components/Navbar";
import { BackendService } from "@genezio-sdk/hackaton";
import { HiMiniXMark } from "react-icons/hi2";
export default function Instagram() {
  const [text, setText] = useState<string>("");
  const [postDate, setPostDate] = useState<Date>(new Date());
  const [imageUrl, setImageUrl] = useState<string>(
    "https://picsum.photos/800/800"
  );
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostDate(e.target.value);
  };
  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };
  const handleMediaStory = async () => {
    try {
      const res = await BackendService.createPost(
        postDate,
        "STORY",
        "INSTAGRAM",
        imageUrl,
        text
      );
      console.log(res);
      alert("Post successful");
    } catch (error) {
      alert("Post failed");
      console.log(error);
    }
  };
  const handleMediaPost = async () => {
    try {
      const res = await BackendService.createPost(
        postDate,
        "POST",
        "INSTAGRAM",
        imageUrl,
        text
      );
      console.log(res);
      alert("Post successful");
    } catch (error) {
      alert("Post failed");
      console.log(error);
    }
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  let content;
  if (modal) {
    content = (
      <div className="fixed w-full h-screen text-white bg-white/10 flex flex-col justify-center items-center z-20">
        <div className=" shadow-xl w-1/2 h-3/4 bg-[#393577] rounded-lg p-10">
          <button
            onClick={toggleModal}
            className=" flex font-istok font-bold text-[#111111] p-2 right-0  hover:bg-[#E9D141] duration-300 ease-in rounded-full"
          >
            <HiMiniXMark size={35} color="white" />
          </button>
          <h1 className=" font-bold text-4xl font-istok flex justify-center">
            Post
          </h1>
          <label className=" text-2xl grid place-items-center">
            Text:
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              className=" bg-[#644a4a] opacity-75 border-2 border-black rounded-lg h-full"
            />
          </label>
          <br />
          <label className=" text-2xl grid place-items-center">
            Post Date:
            <input
              className="bg-[#282828] opacity-75 rounded-lg border-2"
              type="datetime-local"
              onChange={handleDateChange}
            />
          </label>
          <br />
          <label className=" text-2xl grid place-items-center">
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={handleImageUrlChange}
              className="bg-[#282828] opacity-75 rounded-lg border-2"
            />
          </label>
          <div className=" text-lg grid grid-cols-2 place-items-center text-center mt-12">
            <button
              onClick={handleMediaPost}
              className=" p-4 bg-[#E9D141] rounded-full text-black font-semibold"
            >
              Post on feed
            </button>
            <button
              onClick={handleMediaStory}
              className=" p-4 bg-[#E9D141] rounded-full text-black font-semibold"
            >
              Post a story
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Sidenav />
      {content}
      <div className=" w-screen h-screen bg-gradient-to-tr from-[#524AA4] to-[#3B3199]">
        <div className="grid place-items-center ">
          <div className="text-left -translate-x-32">
            <h2 className="  text-gray-100 font-bold text-3xl pt-24 font-istok">
              Post on all platforms
            </h2>
            <p className="  text-gray-100  text-lg pt-6 font-istok">
              Post on Intagram in the same time and interact with your
              followers.
            </p>
            <button
              onClick={toggleModal}
              className=" flex font-istok font-bold text-[#111111] p-5 bg-[#E9D141] hover:bg-[#bda834] duration-300 ease-in rounded-full mt-10"
            >
              Schedule post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
