import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomNavbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Speakers } from "./pages/Speakers";
import { Schedule } from "./pages/Schedule";
import { Sponsors } from "./pages/Sponsors";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
