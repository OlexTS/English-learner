import { Button, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWord, editWord } from 'redux/wordsSlice';

export const WordsListItem = ({
  word: { wordUk, wordEn, checked, id },
  
  idx,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [ukOption, setUkOption] = useState(wordUk);
  const [enOption, setEnOption] = useState(wordEn);
  const dispatch = useDispatch();

  const handleDeleteWord = () => {
    dispatch(deleteWord(id));
  };

  const handleEditWord = () => {
    if (isEdit) {
      dispatch(editWord({ id, wordUk: ukOption, wordEn: enOption, checked }));
      setIsEdit(false);
      return;
    }
    setIsEdit(true);
  };

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <FormControlLabel control={<Checkbox checked={checked} />} />
      <span>{idx}</span>
      {isEdit ? (
        <input
          type="text"
          value={ukOption}
          onChange={e => {
            setUkOption(e.target.value);
          }}
        />
      ) : (
        <span>{wordUk}</span>
      )}
      {isEdit ? (
        <input
          type="text"
          value={enOption}
          onChange={e => {
            setEnOption(e.target.value);
          }}
        />
      ) : (
        <span>{wordEn}</span>
      )}
      <div>
        <Button onClick={handleEditWord}>{isEdit ? 'Save' : 'Edit'}</Button>
        <Button onClick={handleDeleteWord}>Delete</Button>
      </div>
    </li>
  );
};