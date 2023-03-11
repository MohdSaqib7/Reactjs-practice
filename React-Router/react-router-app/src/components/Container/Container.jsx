import React from 'react'
import Card from './Card'
import './Container.css'
import data from './data'

function Container() {

  return (
    <div className='container'>
        <h1 className='container-heading'>Our Project</h1>
        <div className='cards'>
          <Card cardimage={data[0].cardimage} cardname={data[0].cardname} />
          <Card cardimage={data[1].cardimage} cardname={data[1].cardname} />
          <Card cardimage={data[2].cardimage} cardname={data[2].cardname} />
          <Card cardimage={data[3].cardimage} cardname={data[3].cardname} />
          <Card cardimage={data[4].cardimage} cardname={data[4].cardname} />
          <Card cardimage={data[5].cardimage} cardname={data[5].cardname} />
          <Card cardimage={data[6].cardimage} cardname={data[6].cardname} />
          <Card cardimage={data[7].cardimage} cardname={data[7].cardname} />
          <Card cardimage={data[8].cardimage} cardname={data[8].cardname} />
        </div>
        
    </div>
  )
}

export default Container