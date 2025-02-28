import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header.js"
import Footer from './components/Footer.js';
import Home from "./components/Home.js"
import Projects from './components/Projects.js';
import Experiences from './components/Experiences.js';
// import Resume from './components/Resume.js';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header className="Header-class" />
        <Routes className="Routes">
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experiences" element={<Experiences/>} />
          {/* <Route path="/resume" element={<Resume/>} /> */}
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
