import TodoItem from './TodoItem'
import { Todo } from './types'

interface TodoListProps {
  list: Todo[]
  toggleTodo: (id: Todo['id']) => void
  removeTodo: (id: Todo['id']) => void
}

const TodoList = ({ list, removeTodo, toggleTodo }: TodoListProps) => {
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
