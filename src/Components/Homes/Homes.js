import React, { useState } from 'react';

import Intro from '../Home/Intro/Intro';
import Menu from '../Home/Menu/Menu';
import Portfolio from '../Home/Portfolio/Portfolio';
import Testimonials from '../Home/Testimonials/Testimonials';
import Topbar from '../Home/Topbar/Topbar';
import Works from '../Home/Works/Works';
import "../../App.scss"
import Contact from '../Home/Contact/Contact';


const Homes = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
        <Intro/>
        <Portfolio/>
        <Testimonials/>
        <Works/>
        <Contact/>
      </div>
    </div>
    );
};

export default Homes;