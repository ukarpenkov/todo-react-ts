import AddNewItem from 'components/NewItem'
import { useAppDispatch } from 'redux-hook'
import { createTodo } from './todoAcyncActions'

export const NewAsyncTodo = () => {
  const dispatch = useAppDispatch()
  const handleNewTodo = (title: string) => {
    dispatch(createTodo(title))
  }

  return <AddNewItem placeholder="add new todo" handleClick={handleNewTodo} />
}
