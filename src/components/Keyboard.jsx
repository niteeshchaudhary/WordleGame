import MyKeys from "./Mykeys";
import EnterKey from "./EnterKey";
import BackSpaceKey from "./BackSpaceKey";
import style from "./keyboard.module.css";
export default function Keyboard({keyboardstate}) {
  return (
    <div>
      <div className={style.row1} key={0}>
        {Array.from("qwertyuiop".split("")).map((ele, index) => (
          <MyKeys key={index} content={ele} state={keyboardstate[ele.charCodeAt(0)-97]} />
        ))}
      </div>
      <div className={style.row1} key={1}>
        {Array.from("asdfghjkl".split("")).map((ele, index) => (
          <MyKeys key={index} content={ele} state={keyboardstate[ele.charCodeAt(0)-97]} />
        ))}
        <BackSpaceKey />
      </div>
      <div className={style.row1} key={2}>
        {Array.from("zxcvbnm".split("")).map((ele, index) => (
          <MyKeys key={index} content={ele} state={keyboardstate[ele.charCodeAt(0)-97]} />
        ))}
        <EnterKey />
      </div>
    </div>
  );
}
