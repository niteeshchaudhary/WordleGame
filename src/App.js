import { useEffect, useState } from "react";
import "./App.css";
import Middle from "./components/Middle";
import TopNav from "./components/TopNav";
import Keyboard from "./components/Keyboard";

function App() {
  const [keyboardstate,setKeboardstate]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  console.log(keyboardstate);
  useEffect(()=>{
    localStorage.setItem("keyState",JSON.stringify(keyboardstate));
    console.log("ye hui back ",keyboardstate);
  },keyboardstate)
  return (
    <div className="App">
      <TopNav />
      <Middle keyboardstate={keyboardstate} setKeboardstate={setKeboardstate}/>
      <Keyboard keyboardstate={keyboardstate} />
    </div>
  );
}

export default App;
