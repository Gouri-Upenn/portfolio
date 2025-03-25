import React from 'react'
import { Link } from "react-router-dom";

import './navigationBar.css';
import logo from '../../assets/purplelogo.png'
import { useState } from 'react';


function NavigationBar() {
  return (
    <nav className="navigationBar">
      <Link to="/" className="LogoLink">
        <img src={logo} alt="Logo" className="Logo" />
      </Link>
      <div className='desktopMenu'>
        <Link to="/" className="btn btn-moving-gradient btn-moving-gradient--blue">HOME</Link>
        <Link to="/projects" className="btn btn-moving-gradient btn-moving-gradient--blue">MY PROJECTS</Link>
        <Link to="/resume" className="btn btn-moving-gradient btn-moving-gradient--blue">RÉSUMÉ</Link>
        <Link to="/courses" className="btn btn-moving-gradient btn-moving-gradient--blue">COURSES</Link> 
      </div>
    </nav >
  );
}

export default NavigationBar;
