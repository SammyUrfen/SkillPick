import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContainer from './components/Main-Container'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar className="Navbar" />
      <Sidebar className="Sidebar"/>
      <MainContainer className="Main-Container"/>
    </div>
  )
}

export default App
