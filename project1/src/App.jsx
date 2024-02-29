import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from './AppName'
import AddTodo from './AddTodo'
import "./App.css"
import TodoItems from './TodoItems'

function App() {

  const todoItems = [
    {
    name: "Buy Milk",
    dueDate: '4/10/2024'
    },

    {
      name: "Go to College",
      dueDate: '10/10/2024'
    },

    {
      name: "Watch Movie",
      dueDate: '10/10/2024'
    }
]

  return (
    <center classNameName='todo-container'>

      <AppName/>
      <AddTodo/>
      <TodoItems todoItems={todoItems}/>

    </center>
  )
}

export default App
