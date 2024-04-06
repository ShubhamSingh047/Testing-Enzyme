import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>First React Test Case</p>
      <img title="ai generated img" src={logo} />
      <input type="text" placeholder="enter user name" />
      <button>Test done</button>
    </div>
  );
}

export default App;
