// import logo from './logo.svg';
// import './App.css';
import { Row } from 'react-bootstrap';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Footer from './SmallComponent/Footer';
import { Routes, Route } from 'react-router-dom';
import AboutMain from './Pages/AboutMain';
import ContactMain from './Pages/ContactMain'
import ErrorPage from './Pages/ErrorPage';
import RingsMain from './Pages/RingsMain';
import BraceletsMain from './Pages/BraceletsMain';
import EarringsMain from './Pages/EarringsMain';
import NecklacesMain from './Pages/NecklacesMain';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path='home' element={ <Home /> } />
        <Route path='about' element={<AboutMain />} />
        <Route path='contact' element={<ContactMain />} />

        <Route path='rings' element={<RingsMain />} />
        <Route path='bracelets' element={<BraceletsMain />} />
        <Route path='Earrings' element={<EarringsMain />} />
        <Route path='Necklaces' element={<NecklacesMain />} />
        
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
