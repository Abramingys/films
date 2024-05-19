import { useSelector } from 'react-redux';

import { HistoriesBlock } from '../components/HistoriesBlock/HistoriesBlock';
import useAuth from '../hooks/useAuth';
import { selectHistory } from '../redux/slices/historySlice';

export default function History() {
  const histories = useSelector(selectHistory);
  const { currentUser } = useAuth();

  return <HistoriesBlock histories={histories[currentUser.email]} />;
}
