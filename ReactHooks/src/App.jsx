
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0) 


  const addValue =  () => {
    // counter += 1
    if(counter < 20){
    setCounter(counter+1)
    }
  }

  const removeValue  = () => {
    if(counter > 0){
    setCounter(counter-1)
    }
  }

  return (
    <>
     <h1>Vivek Thakur</h1>
     <h2>Counter value : {counter}</h2>
     <button
     onClick={addValue}
     >Add Value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
     <footer>footer : {counter}</footer>
    </>
  )
}

export default App
