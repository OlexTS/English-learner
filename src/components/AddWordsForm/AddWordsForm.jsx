import { TextField, Button } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addWord } from 'redux/wordsSlice';

export const AddWordsForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const wordUk = e.currentTarget.elements.uk.value;
    const wordEn = e.currentTarget.elements.en.value;
    dispatch(addWord({id: nanoid(), wordEn, wordUk, checked: false}))
  }
  
  return (
    
    <form style={{ padding: '24px', backgroundColor: 'white' }} onSubmit={handleSubmit}>
      <TextField name='uk' label='Ukrainian word'/>
      <TextField name='en' label='English word'/>
      <Button type='submit'>Add word</Button>
    </form>
  );
};
