import { Todo } from './types'

interface TodoItemProps extends Todo {
  style?: React.CSSProperties
  toggleTodo: (id: Todo['id']) => void
  removeTodo: (id: Todo['id']) => void
}

const TodoItem = ({
  id,
  title,
  completed,
  style = {},
  toggleTodo,
  removeTodo,
}: TodoItemProps) => {
  return (
    <li style={{ color: 'red', backgroundColor: 'wheat', ...style }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <span style={{ cursor: 'pointer' }} onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  )
}

export default TodoItem
