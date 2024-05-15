import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Movies from '../components/Movies/Movies';

export default function SearchMovies() {
  const [suggestionsFilms, setSuggestionsFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('keyword');

  useEffect(() => {
    setIsLoading(true);
    const apiKey = import.meta.env.VITE_API_KEY;
    fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${searchName}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => res.json())
      .then((obj) => {
        setSuggestionsFilms(obj.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [searchName]);

  return <Movies films={suggestionsFilms} isLoading={isLoading} />;
}
