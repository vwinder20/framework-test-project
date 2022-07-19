import { useEffect, useState } from "react";

// Importing components
import Paintings from "./components/Paintings/Paintings";
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar";

// Utils and styles
import { PAINTING_PER_PAGE } from "./utils/constants";
import "./App.sass";

// SVG files for logo and theme
import { ReactComponent as Logo } from "./assets/fwt_logo.svg";
import { ReactComponent as WhiteLight } from "./assets/light.svg";

function App() {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const handleClickPage = (num) => {
    setPage(num);
  };

  // Getting filter data from childs components
  function getDataFromChild(gettingData) {
    setCurrentData(gettingData);
  }

  // Fetching data and set total pages hook
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/paintings")
        .then((response) => response.json())
        .then((respData) => setData(respData));
    }

    fetchData();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(currentData.length / PAINTING_PER_PAGE));
  }, [setTotalPages, currentData.length]);

  return (
    <div className="App">
      <header>
        <Logo />
        <WhiteLight />
      </header>
      <Navbar
        currentData={data}
        sendDataToParrent={getDataFromChild}
        setTotalPages={setTotalPages}
      />
      <Paintings currentData={currentData} page={page} />
      <Pagination
        totalPages={totalPages}
        handleClickPage={handleClickPage}
        page={page}
      />
    </div>
  );
}

export default App;
