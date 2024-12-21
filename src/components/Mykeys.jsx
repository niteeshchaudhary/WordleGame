import { useState } from "react";
import style from "./keyboard.module.css";
import { useEffect } from "react";

export default function MyKeys({ state, content }) {
  const [mycolor,setcolor]=useState("");
  const doclick = () => {
    const event = new KeyboardEvent("keydown", {
      key: content, // Specify the key you want to simulate
    });
    document.body.dispatchEvent(event);
  };
  useEffect(()=>{
    setcolor(state === 1
          ? "grey"
          : state === 2
          ? "yellow"
          : state === 3
          ? "green"
          :"");
  },[state])
  return (
    <button className={style.keys}
      style={{backgroundColor:mycolor}}
      onClick={doclick}>
      {content}
    </button> 
  );
}
