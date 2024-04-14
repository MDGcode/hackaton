import { useState } from "react";
import Sidenav from "../components/Navbar";
import { FaXTwitter } from "react-icons/fa6";
import { BackendService } from "@genezio-sdk/hackaton";
export default function Settings() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleChangeSettingsInsta = async () => {
    try {
      const res = await BackendService.updateIgCredentials(username, password);
      console.log(res);
      alert("Change successful");
    } catch (error) {
      alert("Change failed");
      console.log(error);
    }
  };
  return (
    <>
      <Sidenav />
      <div className=" w-screen h-screen bg-gradient-to-tr from-[#524AA4] to-[#3B3199]">
        <div className="flex justify-center text-5xl font-bold text-white font-istok tracking-wider pt-14">
          Settings
        </div>
        <div className="grid place-items-center mt-8 font-semibold text-white text-3xl">
          <h2>Instagram</h2>
          <label className=" text-2xl flex gap-5 mt-10">
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUserNameChange}
              className="bg-[#282828] opacity-75 rounded-lg border-2"
            />
          </label>
          <label className=" text-2xl flex gap-5  mt-8">
            Password:
            <input
              type="text"
              value={password}
              onChange={handlePasswordChange}
              className="bg-[#282828] opacity-75 rounded-lg border-2"
            />
          </label>
          <button
            onClick={handleChangeSettingsInsta}
            className=" flex justify-end px-4 py-2 bg-[#E9D141] rounded-full mt-10 text-black text-lg font-semibold"
          >
            Save instagram changes
          </button>
        </div>

        <div className="grid place-items-center  mt-6 font-semibold text-white text-3xl">
          <FaXTwitter />
          <div className=" grid grid-cols-2 gap-8 mt-6">
            <div>
              <label className=" text-2xl ">
                APP_TOKEN:
                <input
                  type="text"
                  value={username}
                  onChange={handleUserNameChange}
                  className="bg-[#282828] opacity-75 rounded-lg border-2 ml-2"
                />
              </label>
            </div>
            <div>
              <label className=" text-2xl flex gap-5 ">
                APP_SECRET:
                <input
                  type="text"
                  value={password}
                  onChange={handlePasswordChange}
                  className="bg-[#282828] opacity-75 rounded-lg border-2"
                />
              </label>
            </div>
            <div>
              <label className=" text-2xl ">
                ACCESS_TOKEN:
                <input
                  type="text"
                  value={username}
                  onChange={handleUserNameChange}
                  className="bg-[#282828] opacity-75 rounded-lg border-2 ml-2"
                />
              </label>
            </div>
            <div>
              <label className=" text-2xl flex gap-5 ">
                ACCESS_SECRET:
                <input
                  type="text"
                  value={password}
                  onChange={handlePasswordChange}
                  className="bg-[#282828] opacity-75 rounded-lg border-2"
                />
              </label>
            </div>
          </div>
          <button className=" flex justify-end px-4 py-2 bg-[#E9D141] rounded-full mt-10 text-black text-lg font-semibold">
            Save X changes
          </button>
        </div>
      </div>
    </>
  );
}
