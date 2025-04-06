import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [city,setCity]=useState('')
  let getData=(event)=>{
    // fetch()
    console.log(city)
    event.preventDefault()
    setCity('')


  }
  return (
    <div className="App">
      <form onSubmit={getData}>
        <input type='text' value={city} onChange={(e)=>setCity(e.target.value)}></input>
        <button>submit</button>
      </form>

    </div>
  );
}

export default App;
