import styles from './PaginationButton.module.scss';

export function PaginationButton({ page, setPage, data }) {
  let paginationList = Array.from(
    { length: data.totalPages },
    (_, index) => index + 1,
  );

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className={styles.pagination}>
      <button
        disabled={page === 1}
        className={styles.paginationBtn}
        id="prev"
        onClick={handlePrevPage}
      >
        {'<'}
      </button>
      <ul className={styles.paginationList}>
        {paginationList.map((item, index) => (
          <li
            onClick={() => handlePageClick(item)}
            key={index}
            className={`${styles.paginationItem} ${page === item ? styles.paginationItemActive : ''}`}
          >
            {item}
          </li>
        ))}
      </ul>
      <button
        className={styles.paginationBtn}
        id="next"
        onClick={handleNextPage}
        disabled={page === data.totalPages}
      >
        {'>'}
      </button>
    </div>
  );
}
