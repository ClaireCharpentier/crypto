import React, { useEffect, useState } from "react";

const StarIcon = ({ coinId }) => {
  const [Like, setLike] = useState(false);

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      }
    } else {
      setLike(false);
    }
  }, []);

  const idChecker = (id) => {
    let favList = null;
    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }
    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        window.localStorage.coinList = [...favList, coinId];
        setLike(true);
      }
    } else {
      window.localStorage.coinList = coinId;
      setLike(true);
    }
  };
  return (
    <img
      onClick={() => idChecker(coinId)}
      src={Like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
    />
  );
};

export default StarIcon;
