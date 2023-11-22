import TodoItem from 'components/TodoItem'
import { Todo } from 'components/types'
import { useAppDispatch } from 'redux-hook'

import { selectAsyncTodos } from './asncTodoSelector'
import { useSelector } from 'react-redux'
import { removeTodo, toggleTodo } from 'features/Todo/todoSlice'
import { useEffect } from 'react'
import { fetchAllTodos } from './todoAcyncActions'

const AsyncTodoList = () => {
  const { list } = useSelector(selectAsyncTodos)
  const dispatch = useAppDispatch()
  const handleRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id))
  }

  const handleToggleTodo = (id: Todo['id']) => {
    dispatch(toggleTodo(id))
  }

  useEffect(() => {
    dispatch(fetchAllTodos())
  }, [])

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

export default AsyncTodoList
