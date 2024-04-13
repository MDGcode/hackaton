import { Twitter } from "@genezio-sdk/hackaton";
import { useState, ChangeEvent } from "react";
export default function Home() {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (text: string) => {
    try {
      const res = await Twitter.postTweet(text);
      console.log(res);
      setResponse(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    handleSubmit(inputText);
  };

  return (
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
  );
}
