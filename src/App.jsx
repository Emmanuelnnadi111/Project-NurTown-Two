import { useState } from "react";
import "./App.css";
import Home from "./components/pages/home/Home";
import Gallery from "./components/pages/gallery/Gallery";
import Projects from "./components/pages/projects/Projects";
import Certification from "./components/pages/certifications/Certification";
import Contact from "./components/pages/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/gallery" Component={Gallery} />
        <Route exact path="/projects" Component={Projects} />
        <Route exact path="*" Component={Certification} />
        <Route exact path="*" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
