import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar_ from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
      </div>
      <div className="section">
        <Main />
        <Sidebar_ />
      </div>
    </>
  );
}

export default App;
