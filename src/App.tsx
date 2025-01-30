import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-white relative">
        <Background />
        <CustomCursor />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;