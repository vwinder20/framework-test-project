import "./styles.sass";
import FilterByAuthor from "./FilterByAuthor";
import FilterByLocation from "./FilterByLocation";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { ReactComponent as Arrow } from "../../assets/arrowWhite.svg";
import FilterByCreated from "./FilterByCreated";
import { useEffect, useState } from "react";
function Navbar({ currentData, sendDataToParrent, theme }) {
  const [searchField, setSearchField] = useState("");
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    const newArray = currentData.filter((item) => {
      return item.name.toLowerCase().includes(searchField);
    });
    sendDataToParrent(!newArray.length ? currentData : newArray);
    setNavData([...newArray]);
  }, [currentData, searchField]);

  return (
    <nav className="nav-list">
      <input
        className={`nav-item search ${theme ? "night-theme" : ""}`}
        type="search"
        placeholder="Name"
        onChange={(e) => setSearchField(e.target.value.toLowerCase())}
      />
      <FilterByAuthor
        currentData={navData}
        Cross={Cross}
        Arrow={Arrow}
        sendDataToParrent={sendDataToParrent}
        theme={theme}
      />
      <FilterByLocation
        currentData={navData}
        Cross={Cross}
        Arrow={Arrow}
        sendDataToParrent={sendDataToParrent}
        theme={theme}
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
