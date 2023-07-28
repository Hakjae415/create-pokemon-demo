import { useState } from 'react'
import './App.css'
import Header from './components/Header'


const App = () => {
  
  const getPokemon = async() => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon")
      const data = await response.json()
      return data
    } catch(err) {
      console.error(err)
    }

  }

  return (
    <>
      <header>
        <nav>
          <a href="https://google.com">Google</a><br/>
          <a href="https://facebook.com">FaceBook</a><br/>
          <a href="https://LinkedIn.com">LinkedIn</a>
        </nav>
        <label>Username</label>
        <input placeholder="Username"/><br/>
        <label>Password</label>
        <input placeholder="Password"/><br/>
        <button>Submit</button>
      </header>

      <ul>

      </ul>  
    </>
  )
}

export default App
