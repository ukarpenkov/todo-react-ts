import React, { useEffect, useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import NewTodoForm from './components/NewTodoForm'
import { Todo } from './components/types'
import TodoList from './components/TodoList'

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

  const toggleTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const removeTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    )
  }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
  //     res.json().then((data: Todo[]) => {
  //       setTodos(data)
  //     })
  //   )
  // }, [])

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      <TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App
