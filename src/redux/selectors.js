import { createSelector } from '@reduxjs/toolkit';

export const selectWords = state => state.words;
export const selectFilterValue = state => state.filter;
export const selectFilteredWords = createSelector(
  [selectWords, selectFilterValue],
  (words, filter ) => {
    return words.filter(
      word =>
        word.wordUk.toLowerCase().includes(filter.toLowerCase().trim()) ||
        word.wordEn.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
