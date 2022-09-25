import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/navbar';
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
      
      <Route path="/" />
      <Route path="/home" element={<Navbar/>}/>
      <Route path="/about" element={<Navbar/>}/>
      <Route path="/contact" element={<Navbar/>}/>
      <Route path="/gallery" element={<Navbar/>}/>
      
      
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

