import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import Home from './components/HomePage';
import HowWeDoIt from './components/HowWeDoIt';
import Story from './components/Story';

const App = () => {
  return (
    <BrowserRouter>
      <div >
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<AboutUs/>}/>
        <Route path={"/contact"} element={<ContactUs/>}/>
        <Route path={"/careers"} element={<Careers/>}/>
        <Route path={"/howwedoit"} element={<HowWeDoIt/>}/>
        <Route path={"/story"} element={<Story/>}/>
      </Routes>
      </div>
      <br/>
      <br/>
      <footer className='footer mt-auto py-3 bg-light'>
        <div className='container'>
            <Link className='nav footer-link' to={"/"}><span>Home</span></Link>
            <br/>
            <Link className='nav footer-link' to={"/about"}><span>About Us</span></Link>
            <br/>
            <Link className='nav footer-link' to={"/contact"}><span>Contact Us</span></Link>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;