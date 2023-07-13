import React, { useState, useEffect } from "react";
import Blocks from "./Blocks";
import { mydict } from "./list.js";
import style from "./style.module.css";
import { BeatLoader } from "react-spinners";
export default function Middle() {
  const [myword, setmyword] = useState(
    mydict[Math.floor(Math.random() * 5758)]
  );
  const [arr, setarr] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [arrw, setarrw] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  function handleKeyPress(event) {
    const turns = arr.flat().indexOf(0) / 5;

    const updatedState = [...arr];
    var cnt = 0;
    for (let i = 0; i < 5; i++) {
      if (turns > 0 && updatedState[turns - 1][i] === 3) {
        cnt += 1;
      }
    }
    if (cnt === 5) return;
    if (event.key === "Enter") {
      const updatedArray = [...arrw];

      const innerArray = updatedArray[turns];
      const result = innerArray.join("");
      if (result.length != 5) {
        return;
      }
      var myList = myword.split("");
      if (result === myword) {
        for (let i = 0; i < 5; i++) {
          updatedState[turns][i] = 3;
        }
        setarr(updatedState);
        return;
      }
      if (mydict.includes(result) && turns < 6) {
        for (let i = 0; i < 5; i++) {
          updatedState[turns][i] = 1;
        }
        for (let i = 0; i < 5; i++) {
          if (myList[i] === innerArray[i]) {
            updatedState[turns][i] = 3;
            myList[i] = "_";
          }
        }
        for (let i = 0; i < 5; i++) {
          if ("_" != myList[i] && innerArray.includes(myList[i])) {
            updatedState[turns][innerArray.indexOf(myList[i])] = 2;
            myList[i] = "_";
          }
        }
        setarr(updatedState);
        setarrw(updatedArray);
      } else {
        return;
      }
    } else if (event.key === "Backspace") {
      const updatedArray = [...arrw];
      const innerArray = updatedArray[turns];
      const index = innerArray.indexOf("");
      if (index !== -1) {
        updatedArray[turns][index - 1] = "";
      } else {
        updatedArray[turns][4] = "";
      }
      setarrw(updatedArray);
    } else if ("qwertyuiopasdfghjklzxcvbnm".includes(event.key)) {
      const updatedArray = [...arrw];
      const innerArray = updatedArray[turns];
      console.log(turns);
      const index = innerArray.indexOf("");
      if (index !== -1) {
        updatedArray[turns][index] = event.key;
      }
      // }
      setarrw(updatedArray);
    }
  }
  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyPress);
    return () => {
      document.body.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  if (Number(myword.length) === 0) {
    return (
      <div className={style.middle}>
        <div className={style.board}>
          <BeatLoader size={15} color="#8a9" />
          <div style={{ color: "white" }}>Loading...</div>;
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.middle}>
        <div className={style.board}>
          {Array.from([0, 1, 2, 3, 4, 5]).map((el, ind) => (
            <div className={style.rows} key={ind}>
              {Array.from([0, 1, 2, 3, 4]).map((ele, index) => (
                <Blocks
                  state={arr[el][ele]}
                  key={index + ind}
                  content={arrw[el][ele]}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
