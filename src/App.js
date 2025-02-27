import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js"
import Footer from './components/Footer.js';
import Home from "./components/Home.js"
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Header className="Header-class" />
        <Routes className="Routes">
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
