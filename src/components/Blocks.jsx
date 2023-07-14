import style from "./style.module.css";

export default function Blocks({ state, content }) {
  return (
    <div
      className={
        state === 0
          ? style.blocks
          : state === 1
          ? style.gyblocks
          : state === 2
          ? style.ylblocks
          : style.cblocks
      }
      style={{ cursor: "default", borderRadius: "5px" }}
    >
      {content === "*" ? "" : content}
    </div>
  );
}
