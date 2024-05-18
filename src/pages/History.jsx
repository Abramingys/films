import { useSelector } from 'react-redux';

import { HistoriesBlock } from '../components/HistoriesBlock/HistoriesBlock';
import { selectFavorites } from '../redux/slices/favoriteSlice';
import { selectHistory } from '../redux/slices/historySlice';

export default function History() {
  const histories = useSelector(selectHistory);
  const favories = useSelector(selectFavorites);
  console.log(histories);
  console.log(favories);

  return <HistoriesBlock histories={histories} />;
}
