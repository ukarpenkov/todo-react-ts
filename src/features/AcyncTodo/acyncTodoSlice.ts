import { createSlice } from '@reduxjs/toolkit'
import { Todo } from 'components/types'
import {
  createTodo,
  fetchAllTodos,
  removeTodo,
  toggleTodo,
} from './todoAcyncActions'

export type TodoSlice = {
  status: 'idle' | 'loading' | 'finished' | 'error'
  list: Todo[]
}

const initialState: TodoSlice = {
  status: 'idle',
  list: [],
}

const todoSlice = createSlice({
  name: '@todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.status = 'finished'
        state.list = action.payload
      })
      .addCase(fetchAllTodos.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.list.push(action.payload)
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload)
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const todo = state.list.find((el) => el.id === action.payload.id)
        if (todo) {
          todo.completed = !todo.completed
        }
      })
  },
})

export default todoSlice.reducer
