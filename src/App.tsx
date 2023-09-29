import React, { useEffect, useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import NewTodoForm from './components/NewTodoForm'
import { Todo } from './components/types'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    }
    setTodos([newTodo, ...todos])
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
      res.json().then((data: Todo[]) => {
        setTodos(data)
      })
    )
  }, [])

  return (
    <div className="App">
      <TodoItem
        id="112"
        completed={false}
        title="Hello"
        style={{ border: '1px solid black' }}
      />
      <NewTodoForm handleClick={addTodo} />
    </div>
  )
}

export default App
