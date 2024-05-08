import styles from './Loader.module.scss';

export default function Loader(second) {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
}
