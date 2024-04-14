import React, { useState } from "react";

export default function ModalX() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className=" flex font-istok font-bold text-[#111111] p-5 bg-[#E9D141] hover:bg-[#bda834] duration-300 ease-in rounded-full mt-10"
      >
        Open
      </button>
      <div>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos commodi
          eum cupiditate. Sequi harum dolore sunt adipisci eligendi. Obcaecati
          magni quasi officia expedita ducimus reprehenderit ex excepturi, quo
          dicta quisquam.
        </p>
        <button
          onClick={toggleModal}
          className=" flex font-istok font-bold text-[#111111] p-5 bg-[#E9D141] hover:bg-[#bda834] duration-300 ease-in rounded-full mt-10"
        ></button>
      </div>
    </>
  );
}
