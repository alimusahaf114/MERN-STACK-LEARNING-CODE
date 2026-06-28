import React from 'react'
import "./App.css"
import { useState } from 'react'
const App = () => {
  const [message , setMessage] = useState("")
  const [aboutMsg , setAboutMsg] = useState("")
  const getMessage = async ()=>{
    const response = await fetch('http://localhost:3000/message')
    const data = await response.text()
    setMessage(data)
  }
  const getMessage2 = async ()=>{
    const response = await fetch('http://localhost:3000/about')
    const data = await response.text()
    setAboutMsg(data)
  }
  return (
    <div style={{textAlign: "center" , marginTop:"100px"}}>
        <h1>React Frontend</h1>
        <button className='btn' onClick={getMessage}>
          Get Message from Server
        </button>
        <button className='btn' onClick={getMessage2}>
          About
        </button>
        <h2>{message}</h2>
        <h2>{aboutMsg}</h2>
    </div>
  )
}

export default App
