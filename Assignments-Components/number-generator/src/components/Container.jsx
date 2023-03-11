import React from 'react'
import Card from './Card'
import './style.css'

function Container() {
  const ar = new Array(32).fill(0);
  return (
    <div className="container">
        <h1>30 Days of React</h1>
        <h1>Number Generator</h1>
        <div className="boxes">
        {
          ar.map((val,idx)=> <Card ele={idx}/>)
        }
        </div>
    </div>
  )
}

export default Container