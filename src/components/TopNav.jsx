import { useState } from "react";
import style from "./tpnv.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function TopNav() {
  const [ico, setico] = useState(faSun);
  const changetheme = () => {
    if (document.getElementById("bd").className !== "light") {
      document.getElementById("bd").setAttribute("class", "light");
      setico(faMoon);
    } else {
      document.getElementById("bd").setAttribute("class", "dark");
      setico(faSun);
    }
  };
  return (
    <>
      <div className={style.nav}>
        <div className={style.icon}>My Icon</div>
        <div className={style.rightpart}>
          <button className={style.btn} onClick={changetheme}>
            <FontAwesomeIcon icon={ico} style={{ color: "#b5a5b5" }} />
          </button>
          <a href="./">Stats</a>
          <a href="./">Settings</a>
          <a href="./">Login</a>
        </div>
      </div>
    </>
  );
}
