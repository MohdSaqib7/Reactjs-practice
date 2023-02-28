import React from 'react'
import './Card.css'

function Card({movie}) {
  return (
    <div className='card'>
      <div className='above'>
        <img src={movie.pic} alt="loading" width="90px" height="100px" />
        <div className='movie-info'>
          <h1>{movie.name}</h1>
          <h4>{movie.dt}</h4><br />
          <h5><i><strong>{movie.tm} </strong></i> {movie.disc} </h5>
        </div>
      </div>
      <div className='middle'>
        <p>{movie.para}</p>
      </div>
      <div className='bottom'>
        <i class="fa fa-share-alt"></i>
        <i class="fa-solid fa-heart"></i>
        <i class='far fa-comment-alt'></i>
      </div>
    </div>
  )
}

export default Card