import "./styles.sass";
import FilterByAuthor from "./FilterByAuthor";
import FilterByLocation from "./FilterByLocation";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { ReactComponent as Arrow } from "../../assets/arrowWhite.svg";
import FilterByCreated from "./FilterByCreated";
import { useEffect, useState } from "react";
function Navbar({ currentData, sendDataToParrent }) {
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    console.log(searchField);
    const newArray = currentData.filter((item) => {
      return item.name.toLowerCase().includes(searchField);
    });
    sendDataToParrent(!newArray.length ? currentData : newArray);
  }, [currentData, searchField]);
  return (
    <nav className="nav-list">
      <input
        className="nav-item search "
        type="search"
        placeholder="Name"
        onChange={(e) => setSearchField(e.target.value.toLowerCase())}
      />
      <FilterByAuthor currentData={currentData} Cross={Cross} Arrow={Arrow} />
      <FilterByLocation data={currentData} Cross={Cross} Arrow={Arrow} />
      <FilterByCreated data={currentData} Cross={Cross} Arrow={Arrow} />
    </nav>
  );
}

export default Navbar;
