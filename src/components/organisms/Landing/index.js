// Assigment portofolio
import React from 'react'
import {
  
  Routes, 
  Route, 
} from 'react-router-dom';
// import { motion } from 'framer-motion'
import About from '../../molecules/Pages/About'
import Awards from '../../molecules/Pages/Awards/Index'
import Education from '../../molecules/Pages/Education/Index'
import Experiences from '../../molecules/Pages/Experiences/Index'
import Interests from '../../molecules/Pages/Interests/Index'
import Skills from '../../molecules/Pages/Skills/Index'
import Navbars from '../../molecules/Navbar/index'
import {Main} from '../../molecules/Pages/PagesElements'
import {Container} from './LandingElements'
function Pages () {
  

  return ( 
      <Container>     
          <Navbars />
          <Main>
              <Routes >
                  <Route path="/" element={<About />}/>
                  <Route path="/about" element={<About />}/>
                  <Route path="/awards" element={<Awards />}/>
                  <Route path="/education" element={<Education />}/>
                  <Route path="/experiences" element={<Experiences />}/>
                  <Route path="/interests" element={<Interests />}/>
                  <Route path="/skills" element={<Skills />}/>
              </Routes>
          
          </Main>
      </Container>
  );
}

export default Pages;
