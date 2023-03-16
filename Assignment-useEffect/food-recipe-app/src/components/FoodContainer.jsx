import React, {useEffect, useState} from 'react'
import Card from './Card'

const FoodContainer = () => {
  const[state, setState] = useState("")
  const[foods, setFoods] = useState([])

  useEffect(()=>{
    foodApi(setFoods)
  },[])

  const apiCall= async ()=>{
    if(state===""){
      return
    }
      const apiData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${state}`)
      const resp = await apiData.json()
      setFoods(resp.meals)
    }

  return (
    <>
      <div className='search-area'>
        <input className='input-area' placeholder='Enter Dish Name' onChange={e => setState(e.target.value)}></input>
        <button className='search-button' onClick={apiCall}>Search</button>
      </div>
      <div className='container'>
        {
          foods.map((val,idx)=>{
            return (
            <Card name={val.strArea} img={val.strMealThumb} key={idx}/>
            )
          })
        }
      </div>
    </>
    
  )
}

async function foodApi(setFoods){
    const myData = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=all")
    const responseData = await myData.json()
    console.log(responseData.meals)
    setFoods(responseData.meals)
}

export default FoodContainer