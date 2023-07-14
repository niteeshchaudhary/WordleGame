import "./App.css";

import Middle from "./components/Middle";
import TopNav from "./components/TopNav";
import Keyboard from "./components/Keyboard";
function App() {
  return (
    <div className="App">
      <TopNav />
      <Middle />
      <Keyboard />
    </div>
  );
}

export default App;
