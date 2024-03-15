import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const myObj = {
    name : "vivek",
    myBtn : "Click"
  }


  return (
    <>
     <h1 className=' bg-green-400 py-3 mb-4'>Hello Vivek </h1>

     <Card name = "vivek"/>
     <Card myBtn={myObj.myBtn}/>
     
    </>
  )
}

export default App
