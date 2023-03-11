import React from 'react'

function Card(props) {
  const color1 = 'green'
  const color2 = 'red'
  const color3 = 'yellow'
  return (
    <div style={ isPrime(props.ele) ? {"backgroundColor": color2} : props.ele%2===0 ? {"backgroundColor":color1} : {"backgroundColor":color3} }className='card'>
        <h1>{props.ele}</h1>
    </div>
  )
}

function isPrime(n){
  if (n===0 || n===1) return false;
  else if(n === 2) return true;
  else{
    for(let x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}

export default Card