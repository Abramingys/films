import { useState } from 'react';

import { useGetInitialMoviesQuery } from '../api/kinopoiskApi';
import { Loader } from '../components/Loader/Loader';
import { Movies } from '../components/Movies/Movies';
import { PaginationButton } from '../components/PaginationButton/PaginationButton';

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useGetInitialMoviesQuery(page);
  console.log(data);
  if (error || !data) {
    return <Loader />;
  }

  return (
    <>
      <Movies films={data} isLoading={loading} />
      <PaginationButton setPage={setPage} page={page} data={data} />
    </>
  );
}
