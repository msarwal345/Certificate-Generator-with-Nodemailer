import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutSection from './components/AboutSection/About';
import Layout from './components/Layout/Layout';
import ContactUs from './components/Contact/ContactUs';
import Upload from './components/upload/upload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/upload" element={<Upload/>} />
      </Routes>
    </Router>
  );
}

export default App;
