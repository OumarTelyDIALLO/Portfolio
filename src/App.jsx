import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Projects from './pages/MonProjet';
import Contact from './pages/Contact';


function App() {
  return (
    <Router basename="/Portfolio"> {/* ✅ pour GitHub Pages */}
      <Navbar />
      <main> {/* ✅ structure flex pour footer collé */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route par défaut */}
          <Route path="/home" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
       
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;