import { useState } from 'react'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import './App.css'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempretureAndDetails from './components/TempretureAndDetails'
import ForeCast from './components/ForeCast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl'>
      <TopButtons/>
      <Inputs/>
      
      <TimeAndLocation/>
      <TempretureAndDetails/>
      <ForeCast/>
    </div>
     
    </>
  )
}

export default App
