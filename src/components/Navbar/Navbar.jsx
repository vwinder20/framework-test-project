import "./styles.sass";
import FilterByAuthor from "./FilterByAuthor";
import FilterByLocation from "./FilterByLocation";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { ReactComponent as Arrow } from "../../assets/arrowWhite.svg";
import FilterByCreated from "./FilterByCreated";
import { useEffect, useState } from "react";
function Navbar({ currentData, sendDataToParrent }) {
  const [searchField, setSearchField] = useState("");
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    const newArray = currentData.filter((item) => {
      const { name, author, location, created } = item;
      return name.toLowerCase().includes(searchField);
    });
    sendDataToParrent(!newArray.length ? currentData : newArray);
    setNavData([...newArray]);
  }, [currentData, searchField]);

  return (
    <nav className="nav-list">
      <input
        className="nav-item search "
        type="search"
        placeholder="Name"
        onChange={(e) => setSearchField(e.target.value.toLowerCase())}
      />
      <FilterByAuthor
        currentData={navData}
        Cross={Cross}
        Arrow={Arrow}
        sendDataToParrent={sendDataToParrent}
      />
      <FilterByLocation
        currentData={navData}
        Cross={Cross}
        Arrow={Arrow}
        sendDataToParrent={sendDataToParrent}
      />
      <FilterByCreated
        currentData={navData}
        Cross={Cross}
        Arrow={Arrow}
        sendDataToParrent={sendDataToParrent}
      />
    </nav>
  );
}

export default Navbar;
