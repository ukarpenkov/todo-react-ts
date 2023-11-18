import TodoItem from 'components/TodoItem'
import { Todo } from 'components/types'
import { useAppDispatch } from 'redux-hook'
import { removeTodo, toggleTodo } from './todoSlice'
import { selectAlltodos } from './todoSelectors'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const list = useSelector(selectAlltodos)
  const dispatch = useAppDispatch()
  const handleRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id))
  }

  const handleToggleTodo = (id: Todo['id']) => {
    dispatch(toggleTodo(id))
  }
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          removeTodo={handleRemoveTodo}
          toggleTodo={handleToggleTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
