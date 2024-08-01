import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { useGetMoviesBySearchQuery } from '../api/kinopoiskApi';
import { Loader } from '../components/Loader/Loader';
import { Movies } from '../components/Movies/Movies';
import { PaginationButton } from '../components/PaginationButton/PaginationButton';
import useAuth from '../hooks/useAuth';
import { selectIsLoggedIn } from '../redux/slices/authSlice';
import { addToHistory } from '../redux/slices/historySlice';

export default function SearchMovies() {
  const [page, setPage] = useState(1);
  const { currentUser } = useAuth();
  const userId = currentUser?.email;

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('keyword');

  const { data, error } = useGetMoviesBySearchQuery(searchName);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (searchName && isLoggedIn && userId) {
      dispatch(addToHistory({ historiesId: searchName, userId }));
    }
  }, [dispatch, searchName, isLoggedIn, userId]);

  console.log(data);
  if (error || !data) {
    return <Loader />;
  }
  return (
    <>
      <Movies films={data.items} error={error} />
      <PaginationButton setPage={setPage} page={page} data={data} />
    </>
  );
}
