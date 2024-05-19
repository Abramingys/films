import { Link } from 'react-router-dom';

import styles from './HistoriesBlock.module.scss';

export function HistoriesBlock({ histories }) {
  return (
    <ul className={styles.root}>
      {!histories ? (
        <li>
          <div>Histories empty</div>
        </li>
      ) : (
        histories.map((item, index) => (
          <Link key={index} to={`/search?keyword=${item}`}>
            <li>
              <p>{item}</p>
            </li>
          </Link>
        ))
      )}
    </ul>
  );
}
