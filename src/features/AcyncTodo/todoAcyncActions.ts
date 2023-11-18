import { createAsyncThunk } from '@reduxjs/toolkit'
import { Todo } from 'components/types'

export const fetchAllTodos = createAsyncThunk('todos/fetchtodos', async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10'
  )
  return (await response.json()) as Todo[]
})

export const createTodo = createAsyncThunk(
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
