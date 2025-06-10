import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      <Routes> 
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Add/>} path='/Add'></Route>
   
     </Routes>
    </>
  )
}

export default App
