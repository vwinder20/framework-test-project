import "./styles.sass";
import { ReactComponent as Back } from "../../assets/back.svg";
import { ReactComponent as DoubleBack } from "../../assets/double_back.svg";

function Pagination({ totalPages, handleClickPage, page }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="btn-list">
      <div className={`arrows left ${page === pages[0] ? "un-active" : ""}`}>
        <div
          className="arrow"
          onClick={() => handleClickPage(page !== 1 ? 1 : page)}
        >
          <DoubleBack />
        </div>

        <div
          className="arrow"
          onClick={() => handleClickPage(page !== 1 ? --page : page)}
        >
          <Back />
        </div>
      </div>
      {pages.map((num) => {
        return (
          <button
            key={num}
            onClick={() => handleClickPage(num)}
            className={`btn ${
              page === num ? " current-page-btn" : "hover-page"
            }`}
          >
            {num}
          </button>
        );
      })}

      <div
        className={`arrows right ${page === pages.length ? "un-active" : ""}`}
      >
        <div
          className="arrow"
          style={{ transform: "rotate(180deg)" }}
          onClick={() => handleClickPage(page !== pages.length ? ++page : page)}
        >
          <Back />
        </div>

        <div
          className="arrow"
          style={{ transform: "rotate(180deg)" }}
          onClick={() => handleClickPage((page = pages.length))}
        >
          <DoubleBack />
        </div>
      </div>
    </div>
  );
}

export default Pagination;
