import "./styles.sass";
import { ReactComponent as Back } from "../../assets/back.svg";
import { ReactComponent as DoubleBack } from "../../assets/double_back.svg";
import { ReactComponent as NightBack } from "../../assets/backBlack.svg";
import { ReactComponent as NightDoubleBack } from "../../assets/double_backBlack.svg";
function Pagination({ totalPages, handleClickPage, page, theme }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className={`btn-list ${theme ? "night-theme" : ""}`}>
      <div className={`arrows  ${page === pages[0] ? "un-active" : ""}`}>
        <div
          className="arrow left"
          onClick={() => handleClickPage(page !== 1 ? 1 : page)}
        >
          {theme ? <NightDoubleBack /> : <DoubleBack />}
        </div>

        <div
          className="arrow"
          onClick={() => handleClickPage(page !== 1 ? --page : page)}
        >
          {theme ? <NightBack /> : <Back />}
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

      <div className={`arrows  ${page === pages.length ? "un-active" : ""}`}>
        <div
          className="arrow"
          style={{ transform: "rotate(180deg)" }}
          onClick={() => handleClickPage(page !== pages.length ? ++page : page)}
        >
          {theme ? <NightBack /> : <Back />}
        </div>

        <div
          className="arrow right"
          style={{ transform: "rotate(180deg)" }}
          onClick={() => handleClickPage((page = pages.length))}
        >
          {theme ? <NightDoubleBack /> : <DoubleBack />}
        </div>
      </div>
    </div>
  );
}

export default Pagination;
