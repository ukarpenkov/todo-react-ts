import React from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

function App() {
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
