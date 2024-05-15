import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardSkeleton from '../MoviesCard/MoviesCardSkeleton';
import styles from './Movies.module.scss';

export default function Movies({ films, isLoading, error }) {
  if (error || !films) {
    return <Loader />;
  }
  return (
    <div className={styles.movies}>
      <p className={styles.moviesFoundResult}>
        <b>{films.length}</b> movies found
      </p>
      <ul className={styles.moviesList}>
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <MoviesCardSkeleton key={index} />
            ))
          : films.map(
              ({ nameRu, year, posterUrl, kinopoiskId, nameOriginal }) => (
                <MoviesCard
                  key={kinopoiskId}
                  nameRu={nameRu}
                  year={year}
                  posterUrl={posterUrl}
                  nameOriginal={nameOriginal}
                  kinopoiskId={kinopoiskId}
                />
              ),
            )}
      </ul>
    </div>
  );
}
