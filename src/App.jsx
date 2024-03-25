import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return <div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div style={{backgroundColor: 'blue'}}>hello</div>
      <div style={{backgroundColor: 'yellow'}}>hello</div>
      <div style={{backgroundColor: 'green'}}>hello</div>
    </div>

    <div className='flex justify-evenly'>
      <div className='bg-red-500 '>hello</div>
      <div className='bg-blue-500 '>hello</div>
      <div className='bg-yellow-500 '>hello</div>
    </div>


    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className='bg-red-500 md:bg-green-500 rounded-md'>hello</div>
      <div className='bg-blue-500 text-yellow-500 rounded-lg'>hello</div>
      <div className='bg-yellow-500 text-xl rounded-full'>hello</div>
    </div>

  </div>
    
      
  
}

export default App
