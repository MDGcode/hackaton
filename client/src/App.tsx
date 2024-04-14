import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Instagram from "./pages/Instagram";
import Twitter from "./pages/Twitter";
import Settings from "./pages/Settings";
import Tets from "./pages/Tets"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/x" element={<Twitter />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/test" element={<Tets />} />
      </Routes>
    </Router>
  );
}

export default App;
