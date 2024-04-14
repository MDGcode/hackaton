import { useState } from "react";
import Sidenav from "../components/Navbar";
import { BackendService } from "@genezio-sdk/hackaton";
export default function Instagram() {
  const [text, setText] = useState<string>("");
  const [postDate, setPostDate] = useState<Date>(new Date());
  const [imageUrl, setImageUrl] = useState<string>(
    "https://picsum.photos/800/800"
  );
  const [response, setResponse] = useState(null);
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostDate(e.target.value);
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };
  const handleMediaPost = async () => {
    try {
      const res = await BackendService.createPost(
        postDate,
        "POST",
        "INSTAGRAM",
        imageUrl
      );
      console.log(res);
      alert("Post successful");
      setResponse(res);
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
      <div className="fixed w-full h-screen bg-white/10 flex flex-col justify-center items-center z-20">
        <div className=" w-1/2 h-1/2 bg-slate-700 rounded-lg p-10">
          <h1 className=" font-bold text-4xl font-istok flex justify-center">
            Post
          </h1>

          <label>
            Text:
            <input type="text" value={text} onChange={handleTextChange} />
          </label>
          <br />
          <label>
            Post Date:
            <input type="datetime-local" onChange={handleDateChange} />
          </label>
          <br />
          <label>
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={handleImageUrlChange}
            />
          </label>
          <br />
          <button onClick={handleMediaPost}>Post to Instagram</button>
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
