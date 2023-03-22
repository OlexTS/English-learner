import { useSelector } from 'react-redux';
import { selectFilteredWords } from 'redux/selectors';
import { WordsListItem } from '../WordsListItem/WordsListItem';

export const WordsList = () => {
  const words = useSelector(selectFilteredWords);
  return (
    <ul style={{}}>
      {words.map((word, idx) => (
        <WordsListItem word={word} key={word.id} idx={idx + 1} />
      ))}
    </ul>
  );
};
