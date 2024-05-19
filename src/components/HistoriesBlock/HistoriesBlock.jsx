import { Link } from 'react-router-dom';

import styles from './HistoriesBlock.module.scss';

export function HistoriesBlock({ histories }) {
  if (!histories) {
    return <div>error</div>;
  }

  return (
    <ul className={styles.root}>
      {histories.length === 0 ? (
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