import { useState } from 'react'
import './App.css'
import Navbar from './components/navigation/Navbar'
import NavLinks from './components/navigation/NavLinks'

function App() {

  return (
    <>
    <Navbar/>
 
      <h1>Index</h1>
      <div className="review-card">
       
        <p>
        ThirdPlace is an app where you can browse, submit and review good spots to hang out at for no cost. There is a loneliness epidemic happening, and people are feeling more isolated than ever. People need free "third places" to socialize and hang out in public. Join now and find community in a third place near you.
        </p>
        
      </div>
      
      <p className="gray-text">
      <center>🍒 Powered by Cherry Systems </center>
      </p>
  
    </>
  )

}

export default App
