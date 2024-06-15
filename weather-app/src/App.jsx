import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className=' w-full h-screen bg-gray-700 flex justify-center items-center'>
    <Weather />
   </div>
    </>
  )
}

export default App
