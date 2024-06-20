import styles from './PaginationButton.module.scss';

export function PaginationButton({ page, setPage, data }) {
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className={styles.pagination}>
      <button
        disabled={page === 1}
        className={styles.paginationBtn}
        id="prev"
        onClick={handlePrevPage}
      >
        Назад
      </button>
      <button
        className={styles.paginationBtn}
        id="next"
        onClick={handleNextPage}
        disabled={page === 5}
      >
        Вперед
      </button>
    </div>
  );
}
