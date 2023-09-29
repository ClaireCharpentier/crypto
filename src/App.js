import React, { useEffect, useState } from "react";
import HeaderInfos from "./components/HeaderInfos";
import GlobalChart from "./components/GlobalChart";
import Table from "./components/Table";

import { data } from "./db.js";
import ToTop from "./components/ToTop";
const App = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    setCoinsData(data);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 145) {
        document.querySelector(".table-header").classList.add("active");
      } else {
        document.querySelector(".table-header").classList.remove("active");
      }
    });
  }, []);
  return (
    <div>
      <div className="app-container">
        <header>
          <HeaderInfos />
          <GlobalChart coinsData={coinsData} />
        </header>
        <Table coinsData={coinsData}></Table>
        <ToTop></ToTop>
      </div>
    </div>
  );
};

export default App;
