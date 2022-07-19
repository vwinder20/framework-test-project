import "./styles.sass";
import FilterByAuthor from "./FilterByAuthor";
import FilterByLocation from "./FilterByLocation";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { ReactComponent as Arrow } from "../../assets/arrowWhite.svg";
import FilterByCreated from "./FilterByCreated";
import { useEffect, useState } from "react";
function Navbar({ currentData, setData, setDataToParrent }) {
  // useEffect(() => {
  //   // console.log(searchField);
  //   setDataToParrent(searchField);
  // }, [searchField, setDataToParrent]);

  function onChangeHandler(e) {
    const searchText = e.target.value.toLowerCase();
    setDataToParrent(searchText);
  }

  return (
    <nav className="nav-list">
      <input
        className="nav-item search "
        type="search"
        placeholder="Name"
        onChange={(e) => onChangeHandler(e)}
      />
      <FilterByAuthor currentData={currentData} Cross={Cross} Arrow={Arrow} />
      <FilterByLocation data={currentData} Cross={Cross} Arrow={Arrow} />
      <FilterByCreated data={currentData} Cross={Cross} Arrow={Arrow} />
    </nav>
  );
}

export default Navbar;
