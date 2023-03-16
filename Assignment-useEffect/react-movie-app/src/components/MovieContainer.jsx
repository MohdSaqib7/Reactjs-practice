import React, {useEffect, useState} from 'react'
import Card from './Card'

const MovieContainer = () => {
  const[state, setState] = useState("")
  const[movie, setMovies] = useState([])

  useEffect(()=>{
    moviesApi(setMovies)
  },[])

  const apiCall= async ()=>{
    if(state===""){
      return
    }
      const apiData = await fetch(`https://www.omdbapi.com/?apikey=e25db4d8&t=${state}&plot=full`)
      const resp = await apiData.json()
      const arr = [resp]
      if(resp.Response==="True"){
        setMovies(arr)
      }
      
    }

  return (
    <>
      <div className='search-area'>
        <input className='input-area' placeholder='Enter movie name' onChange={e => setState(e.target.value)}></input>
        <button className='search-button' onClick={apiCall}>Search</button>
      </div>
      <div className='container'>
        {movie.length!==0? movie.map((val,idx)=>{
          return (
            movie.length!==1? <Card key= {idx} title={val.title} img={`https://image.tmdb.org/t/p/original/`+val.poster_path} year={val.release_date} /> 
            : <Card key={idx} title={val.Title} img={val.Poster} year={val.Year}/>
          )
        }):null}
      </div>
    </>
    
  )
}

async function moviesApi(setMovies){
    const myData = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    const responseData = await myData.json()
    setMovies(responseData.results)
}

export default MovieContainer