import React, { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

type ITodo = {
  id: string
  title: string
  completed: boolean
}
function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<string[]>([])
  const [] = useState<ITodo>({} as ITodo)

  return (
    <div className="App">
      <TodoItem
        id="112"
        completed={false}
        title="Hello"
        style={{ border: '1px solid black' }}
      />
    </div>
  )
}

export default App
