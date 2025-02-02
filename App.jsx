import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
  const [todos, settodos] = useState(0)

  fetch("http://localhost:3000/todos").then(async function(res){
    const json= await res.json();
    settodos(json.todos);
  });
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
