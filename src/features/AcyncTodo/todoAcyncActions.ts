import { createAsyncThunk } from '@reduxjs/toolkit'
import { Todo } from 'components/types'
import { TodoSlice } from './acyncTodoSlice'

export const fetchAllTodos = createAsyncThunk<
  Todo[],
  undefined,
  { state: { asyncTodos: TodoSlice } }
>(
  'todos/fetchtodos',
  async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    )
    return (await response.json()) as Todo[]
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().asyncTodos
      if (status === 'loading') {
        return false
      }
    },
  }
)

export const createTodo = createAsyncThunk<Todo, string>(
  'todo/createTodo',
  async (text: string) => {
    const newTodo: Required<Omit<Todo, 'id'>> = {
      title: text,
      userId: 1,
      completed: false,
    }

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=10',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newTodo),
      }
    )

    return (await response.json()) as Todo
  }
)

export const removeTodo = createAsyncThunk<Todo['id'], Todo['id']>(
  'todo/removeTodo',
  async (id) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/' + id,
      {
        method: 'DELETE',
      }
    )

    return id
  }
)

export const toggleTodo = createAsyncThunk<
  Todo,
  Todo['id'],
  { state: { asyncTodos: TodoSlice } }
>('todo/toggleTodo', async (id, { getState }) => {
  const todo = getState().asyncTodos.list.find((el) => el.id === id)

  if (todo) {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/' + id,
      {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      }
    )

    return await response.json()
  }
})
