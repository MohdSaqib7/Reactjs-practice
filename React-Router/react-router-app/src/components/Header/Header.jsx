import React from 'react'
import Adv from './Adv'
import Navbar from './Navbar'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <Adv />
        <Navbar />
    </div>
  )
}

export default Header