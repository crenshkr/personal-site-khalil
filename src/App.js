import Navbar from "./Components/navbar/Navbar";
import Intro from "./Components/intro/Intro";
import "./App.css";
import Services from "./Components/services/Services";
import Exp from "./Components/exp/Exp";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Intro />
        <Exp />
        <Services />
      </div>
    </BrowserRouter>
  );
}

export default App;
