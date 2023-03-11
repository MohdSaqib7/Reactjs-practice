import './App.css';
import Component from './Component'
import {useState} from 'react'

function App() {
  const obj1 = {
    backgroundColor:"white"
  }
  const obj2 = {
    backgroundColor:"black",
    color:"white"
  }
  const[first, second] = useState(obj1)
  const[flag, upd] = useState(false)
  

  return (
    <div className="App" style={first}>
      <Component />
      <button onClick={()=>{
          upd(!flag)
          second(flag ? obj1 : obj2)
          console.log(first)
      }} >Toggle</button>
    </div>
  );
}

export default App;
