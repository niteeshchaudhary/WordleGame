import { useState } from "react";
import style from "./keyboard.module.css";
import { BsArrowReturnLeft } from "react-icons";

export default function MyKeys({}) {
  const doclick = () => {
    const event = new KeyboardEvent("keydown", {
      key: "Enter", // Specify the key you want to simulate
    });
    document.body.dispatchEvent(event);
  };
  return (
    // <div
    //   className={
    //     state === 0
    //       ? style.blocks
    //       : state === 1
    //       ? style.gyblocks
    //       : state === 2
    //       ? style.ylblocks
    //       : style.cblocks
    //   }
    // >
    <button className={style.keys} onClick={doclick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-arrow-return-left"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
        />
      </svg>
    </button>
    //   {content === "*" ? "" : content}
    // </div>
  );
}
