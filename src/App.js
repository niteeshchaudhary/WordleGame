import logo from "./logo.svg";
import "./App.css";
import RScroller from "./RScroller";
import Counter from "./components/Counter";
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
