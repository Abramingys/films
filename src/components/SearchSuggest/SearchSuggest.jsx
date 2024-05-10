import styles from './SearchSuggest.module.scss';
export default function SearchSuggest({ suggestions }) {
  return (
    <ul className={styles.searchSuggest}>
      {(
        <li>
          <p>Ошибка сервера</p>
        </li>
      ) ??
        suggestions.map(({ nameRu, nameOriginal, kinopoiskId }) => (
          <li key={kinopoiskId}>
            <p>{nameRu ?? nameOriginal}</p>
          </li>
        ))}
    </ul>
  );
}
