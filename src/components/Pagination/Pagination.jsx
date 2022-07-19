import "./styles.sass";
function Pagination({ totalPages, handleClickPage, page }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  return (
    <div className="btn-list">
      {pages.map((num) => {
        return (
          <button
            key={num}
            onClick={() => handleClickPage(num)}
            className={`btn ${page === num ? " current-page-btn" : null}`}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
