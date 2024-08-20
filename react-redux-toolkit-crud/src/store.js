import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
