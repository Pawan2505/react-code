import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  // const navigate = useNavigate();

  // const navigate = useNavigate();
  // const NavigateToAbout = () => {
  //   navigate("/about");
  // };

  const navigate = useNavigate();
  const navigateTo = (url) => {
    navigate(url);
  };
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      {/* <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contact")}>Contact</button> */}

      {/* <button onClick={() => NavigateToAbout()}>About</button> */}

      <button onClick={navigateTo('\about')}>Click Me</button>
    </div>
  );
}

export default App;
