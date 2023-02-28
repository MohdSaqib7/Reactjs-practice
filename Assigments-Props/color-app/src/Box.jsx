import React from 'react'


function Box(props) {
    const css1 = {
        backgroundColor:props.code
    }
    const css2 = {
        color:props.code
    }
    
  return (
    <div className="Box">
        <div className='colorarea' style={css1}></div>
        <h2 className='colorcode'>{props.code}</h2>
        <h4 className='colorname' style={css2}>{props.name}</h4>
    </div>
  )
}

export default Box