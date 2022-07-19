import { useEffect, useState } from "react";

function FilterByAuthor({ currentData, Cross, Arrow, sendDataToParrent }) {
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState("Author");

  function onClickHandler(e) {
    setAuthor(e.target.textContent);
    setOpen(!open);
  }

  useEffect(() => {
    const arrayByAuthor = currentData.filter((item) => {
      return item.author.toLowerCase().includes(author.toLowerCase());
    });
    sendDataToParrent(author === "Author" ? currentData : arrayByAuthor);
  }, [author]);
  return (
    <div className={`nav-item ${open ? "active" : null}`}>
      <div className={`nav-btn-wrapper ${open ? "active" : null}`}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => setOpen(!open)}
        >
          {author}
        </button>
        <div>
          {author === "Author" ? null : (
            <Cross onClick={() => setAuthor("Author")} />
          )}
          <Arrow />
        </div>
      </div>

      {open ? (
        <div className="filter-wrapper">
          <div className="divider"></div>
          <div className="filter-list-wrapper">
            <ul className="filter-list">
              {currentData.map((item) => {
                return (
                  <div
                    className="filter-item-wrapper"
                    key={item.id}
                    onClick={(e) => onClickHandler(e)}
                  >
                    <li className="filter-item">{item.author}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default FilterByAuthor;
