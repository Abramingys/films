import { Link } from 'react-router-dom';

import Search from '../Search/Search';
import ThemeChange from '../ThemeChange/ThemeChange';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="page-container">
        <div className={styles.headerLogo}>
          <Link to="/">
            <b>netflix</b>roulette
          </Link>
          <Link to="/signin">
            <button className={styles.headerLogoBtn}>Log In</button>
          </Link>
          <ThemeChange />
        </div>
        <h1>find your movie</h1>
        <Search />
      </div>
    </header>
  );
}
