import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todoReducer from './features/Todo/todoSlice'
import asyncTodoReducer from './features/AcyncTodo/acyncTodoSlice'

const rootReducer = combineReducers({
  todos: todoReducer,
  asyncTodos: asyncTodoReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
