import { Link } from 'react-router-dom';

import styles from './SearchSuggest.module.scss';

export default function SearchSuggest({ suggestions }) {
  return (
    <ul className={styles.searchSuggest}>
      {suggestions.map(({ nameRu, nameOriginal, kinopoiskId }) => (
        <Link key={kinopoiskId} to={`/movie/${kinopoiskId}`}>
          <li key={kinopoiskId}>
            <p>{nameRu ?? nameOriginal}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
