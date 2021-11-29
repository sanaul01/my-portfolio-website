import Contact from "./Components/Home/Contact/Contact";
import Intro from "./Components/Home/Intro/Intro";
import Portfolio from "./Components/Home/Portfolio/Portfolio";
import Testimonials from "./Components/Home/Testimonials/Testimonials";
import Topbar from "./Components/Home/Topbar/Topbar";
import Works from "./Components/Home/Works/Works";
import "./App.scss"
import { useState } from "react";
import Menu from "./Components/Home/Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
        <Intro/>
        <Portfolio/>
        <Testimonials/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
