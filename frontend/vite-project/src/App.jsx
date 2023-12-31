import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreatTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
  const [todos, settodos] = useState([])

  
  useEffect(()=>
  {
    fetch("http://localhost:3000/todos").then
  (async function(res)
  {
    const json = await res.json();
    settodos(json.todos);
    
  })
  },[])

  

  return (
    <>
      <CreatTodo></CreatTodo>
      <Todos todos={todos} ></Todos>
    </>
  )
}

export default App
