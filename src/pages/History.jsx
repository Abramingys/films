import { useSelector } from 'react-redux';

import { HistoriesBlock } from '../components/HistoriesBlock/HistoriesBlock';
import { selectHistory } from '../redux/slices/historySlice';

export default function History() {
  const histories = useSelector(selectHistory);

  return <HistoriesBlock histories={histories} />;
}
