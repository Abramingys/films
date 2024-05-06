import { useTheme } from '../../hooks/useTheme';

import styles from './ThemeChange.module.scss';

export default function ThemeChange() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <svg
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={styles.root}
        fill={theme === 'light' ? 'var(--apricot)' : ' var(--light)'}
        height="24"
        stroke="rgba(246, 82, 97, 1)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </>
  );
}
