import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h2>Bank Of FlatIron</h2>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
