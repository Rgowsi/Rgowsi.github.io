import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Restaurant from './pages/Restaurant';
import Locate from './pages/Locate';
import Dashboard from './pages/Dashboard';
import SingleProduct from './pages/SingleProduct';
import Footer from './Footer';
import './css/index.css';
import './css/elegantIcons.css';
import './css/style.css';
import './css/listing.css';



export default function App() {
  
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route exact path="/" element={<Restaurant />} />
        <Route exact path="/map" element={<Locate />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/restaurants/:restaurantId" element={<SingleProduct />} />
    </Routes>
    <Footer />
</BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);