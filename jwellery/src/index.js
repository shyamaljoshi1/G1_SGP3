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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Navbar/>
    <BrowserRouter>
      <Routes>
      
<<<<<<< HEAD
      <Route path="/" />
      <Route path="/home" element={<Navbar/>}/>
      <Route path="/about" element={<Navbar/>}/>
      <Route path="/contact" element={<Navbar/>}/>
      <Route path="/gallery" element={<Navbar/>}/>
=======
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact_us" element={<Contact_us/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
>>>>>>> 90ea9a04bd0900f17fcac7b5c34ed7d90e671977
      
      
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

