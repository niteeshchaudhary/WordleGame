import style from "./keyboard.module.css";

export default function MyKeys({ state, content }) {
  const doclick = () => {
    const event = new KeyboardEvent("keydown", {
      key: content, // Specify the key you want to simulate
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
      {content}
    </button>
    //   {content === "*" ? "" : content}
    // </div>
  );
}
