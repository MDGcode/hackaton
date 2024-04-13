import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BackendService } from "@genezio-sdk/hackaton";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  async function sayHello() {
    setResponse(await BackendService.hello(name));
  }

  return (
    <>
      <div className=" text-green-300 text-xl">ceva</div>
    </>
  );
}
