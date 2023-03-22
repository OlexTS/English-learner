import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <TextField
      label="Search"
      onChange={e => {
        dispatch(filter(e.target.value));
      }}
    />
  );
};
