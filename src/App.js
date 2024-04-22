import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
      </div>
      <div className="section">
        <Main />
      </div>
    </>
  );
}

export default App;
