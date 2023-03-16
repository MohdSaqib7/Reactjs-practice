import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.name}</h1>
      <img src={props.img} alt="loadind"  width="300px" height="300px" />
    </div>
  )
}
export default Card
