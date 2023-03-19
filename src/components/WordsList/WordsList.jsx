import { useSelector } from 'react-redux';
import { selectWords } from 'redux/selectors';
import { WordsListItem } from '../WordsListItem/WordsListItem';

export const WordsList = () => {
  const words = useSelector(selectWords);
  return (
    <ul style={{}}>
      {words.map((word, idx) => (
        <WordsListItem word={word} key={word.id} idx={idx + 1} />
      ))}
    </ul>
  );
};
