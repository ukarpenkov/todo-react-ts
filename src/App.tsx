import React, { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import NewTodoForm from './components/NewTodoForm'
import { Todo } from './components/types'

function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const addTodo = () => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    }
    setTodos([newTodo, ...todos])
    setText('')
  }

  return (
    <div className="App">
      <TodoItem
        id="112"
        completed={false}
        title="Hello"
        style={{ border: '1px solid black' }}
      />
      <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo} />
    </div>
  )
}

export default App
