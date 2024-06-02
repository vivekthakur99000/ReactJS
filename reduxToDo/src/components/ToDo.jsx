import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


function ToDo() {
   const todos =  useSelector(state => store.todos)
   const dispatch = useDispatch()
  return (
    <>
    <div>
        todos
    </div>
    {
        todos.map((todo) => (
            <li key={todo.id}>
                {todo.text}
                <button onClick={()=> {
                    dispatch(removeTodo(todo.id))
                }}>X</button>
            </li>
            
        ))
    }
    </>
  )
}

export default ToDo