import styles from './Header.module.scss';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className="page-container">
        <div className={styles.headerLogo}>
          <a href="">
            <b>netflix</b>roulette
          </a>
          <button className={styles.headerLogoBtn}>+ ADD MOVIE</button>
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
