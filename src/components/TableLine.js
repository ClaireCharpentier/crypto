import React, { useState } from "react";
import PercentChange from "./PercentChange";
import StarIcon from "./StarIcon";
import CoinChart from "./CoinChart";

const TableLine = ({ coin, index }) => {
  const [showChart, setShowChart] = useState(false);
  const priceFormater = (number) => {
    if (Math.round(number).toString.length < 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(number);
    } else {
      return number;
    }
  };

  const mktCapFormater = (number) => {
    let newNumber = String(number).split("").slice(0, -6);
    return Number(newNumber.join(""));
  };
  return (
    <div className="table-line">
      <div className="infos-container">
        <StarIcon coinId={coin.id}></StarIcon>
        <p>{index}</p>
        <div className="img">
          <img src={coin.image} alt="logo" height={20} />
        </div>
        <div className="infos">
          <div
            className="chart-img"
            onMouseEnter={() => setShowChart(true)}
            onMouseLeave={() => setShowChart(false)}
          >
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
            <div className="chart-container" id={coin.name}>
              {showChart && (
                <CoinChart coinName={coin.name} coinId={coin.id}></CoinChart>
              )}
            </div>
          </div>
          <h4>{coin.name}</h4>
          <span>-{coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            rel="noreferrer"
            href={
              "https://www.coingecko.com/fr/pi%C3%A8ces/" +
              coin.id.toLowerCase()
            }
          >
            <img src="./assets/info-icon.svg" alt="icon-info" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
      <p className="mktcap">
        {mktCapFormater(coin.market_cap).toLocaleString()} M$
      </p>
      <p class="volume">{coin.total_volume.toLocaleString()} $</p>
      <PercentChange
        percent={coin.price_change_percentage_1h_in_currency}
      ></PercentChange>
      <PercentChange
        percent={coin.price_change_percentage_24h_in_currency}
      ></PercentChange>
      <PercentChange
        percent={coin.price_change_percentage_7d_in_currency}
      ></PercentChange>
      <PercentChange
        percent={coin.price_change_percentage_30d_in_currency}
      ></PercentChange>
      <PercentChange
        percent={coin.price_change_percentage_200d_in_currency}
      ></PercentChange>
      <PercentChange
        percent={coin.price_change_percentage_1y_in_currency}
      ></PercentChange>
      {coin.ath_change_percentage > -3 ? (
        <p>ATH !</p>
      ) : (
        <PercentChange percent={coin.ath_change_percentage}></PercentChange>
      )}
    </div>
  );
};

export default TableLine;
