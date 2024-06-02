import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddToDo'
import ToDo from './components/ToDo'

function App() {
  

  return (
    <>
      <h1>Redux toolkit</h1>
      <AddTodo/>
      <ToDo/>
    </>
  )
}

export default App
