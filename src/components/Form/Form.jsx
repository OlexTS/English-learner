import { useDispatch} from 'react-redux';
// import { getWords, getFilterValue } from "redux/selectors";
import { addWord } from 'redux/addWordsSlice';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const send = dispatch(addWord(event.target.elements.word.value));
    console.log(send);
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Search word</span>
          <input type="text" name="word" />
        </label>
        
          <button type="submit">Send</button>
             </form>
    </div>
  );
};
