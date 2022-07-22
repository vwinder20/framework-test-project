import "./styles.sass";

// Importing Components
import FilterByAuthor from "./FilterByAuthor";
import FilterByLocation from "./FilterByLocation";
import FilterByCreated from "./FilterByCreated";

// Importing svg files for nav-item
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { ReactComponent as Arrow } from "../../assets/arrowWhite.svg";

// Hooks
import { useEffect, useRef, useState } from "react";

function Navbar({ currentData, sendDataToParrent, theme }) {
  const [searchField, setSearchField] = useState("");
  const [navData, setNavData] = useState([]);
  const refWidth = useRef("");
  const [navItemWidth, setNavItemWidth] = useState(() => getNavItemWidth);

  // Filtering data by search field
  useEffect(() => {
    const newArray = currentData.filter((item) => {
      return item.name.toLowerCase().includes(searchField);
    });
    sendDataToParrent(!newArray.length ? currentData : newArray);
    setNavData([...newArray]);
  }, [currentData, searchField]);

  // Getting width of search bar
  function getNavItemWidth() {
    const width = refWidth.current.getBoundingClientRect().width.toFixed(3);
    if (navItemWidth !== width) {
      return setNavItemWidth(width);
    }
  }

  // Geting size of search bar, to set width others nav-item
  useEffect(() => {
    setNavItemWidth(refWidth.current.getBoundingClientRect().width.toFixed(3));
    window.addEventListener("resize", currentData ? getNavItemWidth : "");
  }, [refWidth, currentData]);

  return (
    <nav className="nav-list">
      <div className={`nav-item search ${theme ? "night-theme" : ""}`}>
        <input
          ref={refWidth}
          type="text"
          placeholder="Name"
          onChange={(e) => setSearchField(e.target.value.toLowerCase())}
        />
      </div>

      <FilterByAuthor
        currentData={navData}
        Cross={Cross}
        Arrow={Arrow}
        sendDataToParrent={sendDataToParrent}
        theme={theme}
        navItemWidth={navItemWidth}
      />
      <FilterByLocation
        currentData={navData}
        Cross={Cross}
        Arrow={Arrow}
        sendDataToParrent={sendDataToParrent}
        theme={theme}
        navItemWidth={navItemWidth}
      />
      <FilterByCreated
        currentData={navData}
        Arrow={Arrow}
        sendDataToParrent={sendDataToParrent}
        theme={theme}
      />
    </nav>
  );
}

export default Navbar;
