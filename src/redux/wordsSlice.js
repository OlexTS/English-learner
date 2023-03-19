import { createSlice, nanoid } from '@reduxjs/toolkit';

const addWordsSlice = createSlice({
  name: 'words',
  initialState: [],
  reducers: {
    addWord(state, action) {
      const word = { ...action.payload, id: nanoid() };
      state.push(word);
    },
    deleteWord(state, action) {
      const index = state.findIndex(word => word.id === action.payload);
      state.slice(index, 1);
    },
  },
});

export const wordsReducer = addWordsSlice.reducer;
export const { addWord, deleteWord } = addWordsSlice.actions;
