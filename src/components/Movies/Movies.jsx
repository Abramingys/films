import React from 'react';
import styles from './Movies.module.scss';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardSceleton from '../MoviesCard/MoviesCardSceleton';

export default function Movies() {
  const [films, setFilms] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
  //     method: 'GET',
  //     headers: {
  //       'X-API-KEY': '9844d1bb-3885-4266-bc03-0281c1255cc8',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((obj) => {
  //       console.log(obj);
  //       setFilms(obj.items);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className={styles.movies}>
      <p className={styles.moviesFoundResult}>
        <b>{films.length}</b> movies found
      </p>
      <ul className={styles.moviesList}>
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <MoviesCardSceleton key={index} />
            ))
          : films.map(
              ({ nameRu, year, posterUrl, kinopoiskId, nameOriginal }) => (
                <MoviesCard
                  key={kinopoiskId}
                  nameRu={nameRu}
                  year={year}
                  posterUrl={posterUrl}
                  nameOriginal={nameOriginal}
                />
              )
            )}
      </ul>
    </div>
  );
}
