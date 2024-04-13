import { Twitter } from "@genezio-sdk/hackaton";
import React, { useState, ChangeEvent } from "react";

interface TweetResponse {
  /* Define the structure of the tweet response object */
  /* Adjust this based on the actual response structure */
  tweetId: string;
  message: string;
  createdAt: Date;
}

interface UserInfo {
  /* Define the structure of the user information object */
  /* Adjust this based on the actual user info structure */
  name: string;
  username: string;
  bio: string;
}

const TweetText: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [response, setResponse] = useState<TweetResponse | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const handleSubmit = async (text: string) => {
    try {
      const res = await Twitter.postTweet(text);
      console.log(res);
      alert("Post successful");
      setResponse(res);
    } catch (error) {
      alert("Post failed");
      console.log(error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    handleSubmit(inputText);
  };

  const handleUserCheck = async () => {
    try {
      const res = await Twitter.getUser();
      console.log(res);
      alert("Get successful");
      setUserInfo(res.data); // Assuming res is of type UserInfo
    } catch (error) {
      alert("Get failed");
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your tweet..."
        />
        <button onClick={handleButtonClick}>Post Tweet</button>
        {response && (
          <div>
            <p>Response:</p>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>

      <div>
        <button onClick={handleUserCheck}>Check user</button>
        {userInfo && (
          <div>
            <p>User Information:</p>
            <p>Name: {userInfo.name}</p>
            <p>Username: {userInfo.username}</p>
            <p>Bio: {userInfo.bio}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TweetText;
