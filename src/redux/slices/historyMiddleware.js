import { setLocalStorageHistory } from '../../utils/LocalStorageUtil';
import { addToHistory } from './historySlice';

export const historyMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === addToHistory.type) {
    const state = store.getState();
    const updatedHistories = state.history.histories;

    setLocalStorageHistory(updatedHistories);
  }

  return result;
};
