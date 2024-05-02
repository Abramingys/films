import React from 'react';
import styles from './Movies.module.scss';
import MoviesCard from '../MoviesCard/MoviesCard';
export default function Movies() {
  const [films, setFilms] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
  //     method: 'GET',
  //     headers: {
  //       'X-API-KEY': '9844d1bb-3885-4266-bc03-0281c1255cc8',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((obj) => setFilms(obj.items))
  //     .catch((err) => console.log(err));
  // }, []);
  console.log(films);
  return (
    <div className={styles.movies}>
      <p className={styles.moviesFoundResult}>
        <b>{films.length}</b> movies found
      </p>
      <ul className={styles.moviesList}>
        {films.map(({ nameRu, year, posterUrl, kinopoiskId }) => (
          <MoviesCard
            key={kinopoiskId}
            nameRu={nameRu}
            year={year}
            posterUrl={posterUrl}
          />
        ))}
      </ul>
    </div>
  );
}
