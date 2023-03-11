import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/paths/Home'
import About from './components/paths/About'
import Projects from './components/paths/Projects'
import Services from './components/paths/Services'
import Contact from './components/paths/Contact'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/*" element={<>Error 404 not found</>} />
      </Routes>
    </div>
  );
}

export default App;
