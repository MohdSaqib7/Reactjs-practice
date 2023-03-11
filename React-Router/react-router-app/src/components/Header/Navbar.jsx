import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
            <img src='https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png' alt='loading' width="100px" height="60px"></img>
        </div>
        <div className='middle '>
            <h2><NavLink to='/' style={{textDecoration:"none"}}>Home</NavLink></h2>
            <h2><NavLink to='/About' style={{textDecoration:"none"}}>About</NavLink></h2>
            <h2><NavLink to='/Projects' style={{textDecoration:"none"}}>Projects</NavLink></h2>
            <h2><NavLink to='/Services' style={{textDecoration:"none"}}>Services</NavLink></h2>
            <h2><NavLink to='/Contact' style={{textDecoration:"none"}}>Contact</NavLink></h2>
        </div>
        <div className='right'>
            <button className='enquire-btn'>Enquire now</button>
        </div>
    </div>
  )
}

export default Navbar