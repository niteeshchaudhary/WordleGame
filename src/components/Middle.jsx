import React, { useState, useEffect } from "react";
import Blocks from "./Blocks";
import { mydict } from "./list.js";
import style from "./style.module.css";
import { BeatLoader } from "react-spinners";
export default function Middle({keyboardstate,setKeboardstate}) {
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
  useEffect(()=>{
    console.log("ye horahi back ... ",keyboardstate);
  },[keyboardstate]);

  function handleKeyPress(event) {
    console.log("that ",keyboardstate);
    console.log("thatarr ",arr);
    
    const turns = arr.flat().indexOf(0) / 5;
    if(turns<0){
      console.log(myword);
      return 0;
    }

    const updatedState = [...arr];
    
    
    
    var cnt = 0;
    for (let i = 0; i < 5; i++) {
      if (turns > 0 && updatedState[turns - 1][i] === 3) {
        cnt += 1;
      }
    }
    if (cnt === 5) return;
    if (event.key === "Enter") {
      console.log(JSON.parse(localStorage.getItem("keyState")))
      const updatedKeyState = [...JSON.parse(localStorage.getItem("keyState"))];
      const updatedArray = [...arrw];

      const innerArray = updatedArray[turns];
      const result = innerArray.join("");
      console.log("1");
      if(!mydict.includes(result)){
        return;
      }
      if (result.length !== 5) {
        return;
      }
      console.log("2");
      var myList = myword.split("");
      if (result === myword) {
        for (let i = 0; i < 5; i++) {
          updatedState[turns][i] = 3;
          updatedKeyState[result.charCodeAt(i)-97]=3;
        }
        console.log("Here2.. ",updatedKeyState);
        localStorage.setItem("keyState",JSON.stringify(updatedKeyState));
        setKeboardstate(updatedKeyState);
        setarr(updatedState);
        return;
      }
      console.log("3");
      for (let i = 0; i < 5; i++) {
        updatedState[turns][i] = 1;
        if(updatedKeyState[result.charCodeAt(i)-97]!==2 && updatedKeyState[result.charCodeAt(i)-97]!==3){
          updatedKeyState[result.charCodeAt(i)-97]=1;
        }
      }
      console.log("4");
      if (0 <= turns) {
        for (let i = 0; i < 5; i++) {
          if (myList[i] === innerArray[i]) {
            updatedState[turns][i] = 3;
            updatedKeyState[result.charCodeAt(i)-97]=3;
            myList[i] = "_";
          }
        }
        console.log("5");
        for (let i = 0; i < 5; i++) {
          if ("_" !== myList[i] && innerArray.includes(myList[i])) {
            if(updatedState[turns][innerArray.indexOf(myList[i])] != 3){
              updatedState[turns][innerArray.indexOf(myList[i])] = 2;
            }
            if(updatedKeyState[result.charCodeAt(innerArray.indexOf(myList[i]))-97]!==3){
              updatedKeyState[result.charCodeAt(innerArray.indexOf(myList[i]))-97]=2;
            }
            myList[i] = "_";
          }
        }
        console.log("6");
        console.log("Here",updatedKeyState);
        localStorage.setItem("keyState",JSON.stringify(updatedKeyState));
        setKeboardstate(updatedKeyState);
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
    } else if("qwertyuiopasdfghjklzxcvbnm".includes(event.key)){
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
  // console.log(arr,arr[arr.flat().indexOf(0) / 5],arr[arr.flat().indexOf(0) / 5].reduce((num1,num2)=>num1+num2));

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
        <div className={style.results}>
        { arr.flat().indexOf(0) / 5>=0?arr.flat().indexOf(0) / 5>0 && arr[arr.flat().indexOf(0) / 5-1].reduce((num1,num2)=>num1+num2)==15?myword:"":myword}
        </div>
      </div>
    );
  }
}
