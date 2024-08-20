import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.find(todo => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
    toggleTodo: (state, action) => {
      const existingTodo = state.find(todo => todo.id === action.payload);
      if (existingTodo) {
        existingTodo.completed = !existingTodo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
