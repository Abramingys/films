import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Loader } from '../components/Loader/Loader';
import { Movies } from '../components/Movies/Movies';
import useAuth from '../hooks/useAuth';
import { getApiUrl, useFetch } from '../hooks/useFetch';
import { addToHistory } from '../redux/slices/historySlice';

export default function SearchMovies() {
  const { currentUser } = useAuth();
  const userId = currentUser?.email;

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('keyword');
  const { data, error } = useFetch(getApiUrl(`/films?keyword=${searchName}`));
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (searchName && isLoggedIn && userId) {
      dispatch(addToHistory({ historiesId: searchName, userId }));
    }
  }, [dispatch, searchName, isLoggedIn, userId]);

  if (error || !data) {
    return <Loader />;
  }

  return <Movies films={data.items} error={error} />;
}
