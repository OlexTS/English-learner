import { createSlice } from '@reduxjs/toolkit';

const wordsSlice = createSlice({
  name: 'words',
  initialState: [],
  reducers: {
    addWord(state, action) {
      state.push(action.payload);
    },
    deleteWord(state, action) {
      const index = state.findIndex(word => word.id === action.payload);
      state.splice(index, 1);
    },
    editWord(state, action) {
      const index = state.findIndex(word => word.id === action.payload.id);
      state.splice(index, 1, action.payload);
    },
    toggleChecked(state, action) {
      return state.map(word => word.id === action.payload ? { ...word, checked: !word.checked } : word);
    },
  },
});

export const wordsReducer = wordsSlice.reducer;
export const { addWord, deleteWord, editWord, toggleChecked } = wordsSlice.actions;
