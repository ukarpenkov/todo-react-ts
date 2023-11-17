import './App.css'

import TodoList from './features/Todo/TodoList'
import { NewTodo } from 'features/Todo/NewTodo'

function App() {
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
  //     res.json().then((data: Todo[]) => {
  //       setTodos(data)
  //     })
  //   )
  // }, [])

  return (
    <div className="App">
      <NewTodo />
      <TodoList />
    </div>
  )
}

export default App
