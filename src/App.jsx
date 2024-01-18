import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Challenges from './components/Challenges'
import Playground from './components/Playground'

function App() {

  return (
    <div className='flex'>
      {/* Challenger updates the Challeneg Left-side of Game */}
      <div className='w-[40%]'><Challenges></Challenges></div>

      {/* verticle middle divider  */}
      <div className='border border-black h-[100vh]'></div>

      {/* The playground Where the result and animation will take place Right-side */}
      <div className='w-[60%]'>
        <Playground></Playground>
      </div>
    </div>
  )
}

export default App
