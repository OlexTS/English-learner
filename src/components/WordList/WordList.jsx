import { useSelector } from 'react-redux';
import { getWords } from 'redux/selectors';
import { WordItem } from './WordItem/WordItem';

export const WordList = () => {
  const words = useSelector(getWords);

  return (
    <ul>
      {words.map(word => (
          <li key={word.id}>
              <WordItem word={word} />
          </li>
          
      ))}
    </ul>
  );
};
