import './App.css';
import Nav from './components/nav'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MarketingForm from './pages/MarketingForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="home" element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="form" element={<MarketingForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
