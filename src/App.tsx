import { NewAsyncTodo } from 'features/AcyncTodo/NewAsyncTodo'
import './App.css'

import TodoList from './features/Todo/TodoList'
import { NewTodo } from 'features/Todo/NewTodo'
import AsyncTodoList from 'features/AcyncTodo/AcyncTodoList'

function App() {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />

      <hr />
      <NewAsyncTodo />
      <AsyncTodoList />
    </div>
  )
}

export default App
