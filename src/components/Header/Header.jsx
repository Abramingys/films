import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { selectIsLoggedIn } from '../../redux/slices/authSlice';
import { PageButton } from '../PageButton/PageButton';
import { Search } from '../Search/Search';
import { ThemeChange } from '../ThemeChange/ThemeChange';
import styles from './Header.module.scss';

export function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { handleLogout, loading } = useAuth();
  return (
    <header className={styles.header}>
      <div className="page-container">
        <div className={styles.headerLogo}>
          <Link to="/">
            <b>netflix</b>roulette
          </Link>
          {loading ? null : isLoggedIn ? (
            <>
              <PageButton text={'Log out'} handle={handleLogout} />
              <Link to="/favourites">
                <PageButton text={'Favourites Page'} />
              </Link>
              <Link to="/history">
                <PageButton text={'History Page'} />
              </Link>
            </>
          ) : (
            <Link to="/registration">
              <PageButton text={'Log In'} />
            </Link>
          )}

          <ThemeChange />
        </div>
        <h1>find your movie</h1>
        <Search />
      </div>
    </header>
  );
}
