import './App.css';
import Nav from './components/Nav';
import {Carousel} from './components/Carousel';
import Modal from './Modal';
import Servicio from './components/servicio';
import { useState } from 'react';
import React from 'react';

import Compromiso from './components/Compromiso';
import Footer from './components/Footer';

import { Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Clinica from './pages/Clinica';
import Cirugia from './pages/Cirugias';
import Injertograso from './pages/injerto-graso';
import Oto from './pages/otoplastia-bilateral';
import Lifting from './pages/lifting';
import Rinoplastia from './pages/rinoplastia';
import Lipoescultura from './pages/lipoescultura';
import Mamoplastia from './pages/mamoplastia';
import Blefaroplastia from './pages/blefaroplastia';
import Abdominoplastia from './pages/abdominoplastia';

function App() {
    const [active,setActive] = useState(false);
    const toggle = () => {
      setActive(!active);
    }

  return (
    <>
       <div className="md:px-0 sm:px-0 ">
      <Modal active={active} toggle={toggle}>
          <h1>hola crack</h1>
      </Modal>
      <Nav />
      <div className="mt-20" >
        <Routes>
            <Route  path='/' element={<Home toggle={toggle} />} />
            <Route  path='/servicio' element={
                <div>
                    pagina de servicios
                </div>
            } />
            <Route  path='/clinica' element={
               <Clinica/>
            } />
            <Route  path='/cirugia' element={
               <Cirugia/>
            } />
            <Route  path='/injerto-graso' element={
               <Injertograso/>
            } />
            <Route  path='/otoplastia-bilateral' element={
               <Oto/>
            } />
            <Route  path='/lifting' element={
               <Lifting/>
            } />
            <Route  path='/rinoplastia' element={
               <Rinoplastia/>
            } />
            <Route  path='/lipoescultura' element={
               <Lipoescultura/>
            } />
            <Route  path='/mamoplastia' element={
               <Mamoplastia/>
            } />
            <Route  path='/blefaroplastia' element={
               <Blefaroplastia/>
            } />
            <Route  path='/abdominoplastia' element={
               <Abdominoplastia/>
            } />
             <Route  path='*' element={<div>ERROR 404</div>} />
        </Routes>
        </div>

      <Footer/>    
      </div>
    </>

  );
}

export default App;
