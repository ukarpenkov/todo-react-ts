import React from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

function App() {
  return (
    <div className="App">
      <TodoItem id="112" completed={false} title="Hello" />
    </div>
  )
}

export default App
