import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Привет Houston we have a problem! Это мой первый проект на React!
        </h3>
        <span class="material-symbols-outlined icon">construction</span>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
