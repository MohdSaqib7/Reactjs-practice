import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img className='card-image'  src={props.cardimage} alt='loading' width="380px" height="250px"></img>
        <h2>{props.cardname}</h2>
    </div>
  )
}

export default Card