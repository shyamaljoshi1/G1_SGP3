import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import ContactUs from './Pages/Contact/Contact_us';
import Gallery from './Pages/Gallery/Gallery';
import GlobalStyle from './globalstyle';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './Pages/About/About';
import Footer from './Components/Footer/footer';
import GoldRate from './Components/Gold_rate/gold_rate';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/> }/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/gallery" element={<Gallery/> }/>
      <Route path="/rates" element={<GoldRate/> }/>
      
      
      </Routes>
    <Footer/>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

