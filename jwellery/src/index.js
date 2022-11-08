import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Contact_us from './Pages/Contact/Contact_us';
import Gallery from './Pages/Gallery/Gallery';
import GlobalStyle from './globalstyle';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './Pages/About/About';




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
      <Route path="/contact" element={<Navbar/>}/>
      <Route path="/gallery" element={<Navbar/>}/>
      
      
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

