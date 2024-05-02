import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className="page-container">
        <div className={styles.headerLogo}>
          <Link to="/">
            <b>netflix</b>roulette
          </Link>
          <Link to="*">
            <button className={styles.headerLogoBtn}>+ ADD MOVIE</button>
          </Link>
        </div>
        <h1>find your movie</h1>
        <div className={styles.headerSearch}>
          <input
            className={styles.headerSearchText}
            type="text"
            placeholder="What do you want to watch?"
          />
          <button className={styles.headerSearchBtn}>Search</button>
        </div>
      </div>
    </header>
  );
}
