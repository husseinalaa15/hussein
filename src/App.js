import logo from './logo.svg';
import './App.css';
import React, { useEffect ,useState } from "react";
import { About } from './components/About';
import { Contact } from './components/Contact';

import { NavHeader } from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes}from 'react-router-dom';
import { SS } from './components/SS';
import Skills from './components/Skills';
import Services from './components/Services';
import Work from './components/Work';
import Loader from './components/Loader';

import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

   

    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      setLoading(false);
      },[])
      
  
      // const [cursorX, setCursorX] = useState();
      // const [cursorY, setCursorY] = useState();
      // window.addEventListener('mousedown',(e)=>{
      //   setCursorX(e.pageX)
      //   setCursorY(e.pageY)
      // })
      // useEffect(() => {
      //   const moveCursor = (e) => { }
      //   window.addEventListener('mousemove', moveCursor)
      //   return () => {
      //     window.removeEventListener('mousemove', moveCursor)
      //   }
      // }, [])
  return (
    !loading ?
    <>
      

      <BrowserRouter >
            <NavHeader/>
            {/* <div style={{left:cursorX+"px", top:cursorY+"px"}}  className="cursor" /> */}

      <Routes >
        <Route path="/hussein" exact  element ={<Work/>} />
        <Route path="/hussein/Work"   element ={<Work/>} />
        <Route path="/hussein/About"   element ={<About/>} />
        <Route path="/hussein/Contact"  element ={<Contact/>} />
        <Route path="/hussein/Section"  element ={<SS/>} />
        <Route path="/hussein/Skills"  element ={<Skills/>} />
        <Route path="/hussein/Services"  element ={<Services/>} />

      </Routes>
      
      </BrowserRouter>
    </>
    : 
    
    <Loader />
    
  );
}

export default App;
