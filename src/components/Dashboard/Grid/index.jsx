import React from "react";
import "./styles.css";

import TrendingUpIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownIcon from "@mui/icons-material/TrendingDownRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { Link } from "react-router-dom";

const Grid = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`} >
    <div
      className={
        coin.price_change_percentage_24h > 0
          ? "grid-container"
          : "grid-container grid-container-red"
      }
    >
      <div className="info-flex">
        <div className="img-name">
          <img className="coin-logo" src={coin.image} />
          <div className="name-wrapper">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
        <div
          className={
            coin.price_change_percentage_24h > 0
              ? "watchlist-chip"
              : "watchlist-chip chip-red"
          }
        >
          <StarOutlineRoundedIcon style={{ fontSize: "2rem" }} />
        </div>
      </div>
      <div className="chip-flex">
        <div
          className={
            coin.price_change_percentage_24h > 0
              ? "price-chip"
              : "price-chip chip-red"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
        <div
          className={
            coin.price_change_percentage_24h > 0
              ? "trend-chip"
              : "trend-chip chip-red"
          }
        >
          {coin.price_change_percentage_24h > 0 ? (
            <TrendingUpIcon />
          ) : (
            <TrendingDownIcon />
          )}
        </div>
      </div>
      <div
        className={
          coin.price_change_percentage_24h > 0
            ? "coin-price"
            : "coin-price coin-price-red"
        }
      >
        ${coin.current_price.toLocaleString()}
      </div>
      <div className="market-volume">
        <p className="total-volume">Total Volume: {coin.total_volume.toLocaleString()}</p>
        <p className="market-cap">Market Cap: ${coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
    </Link>
  );
};

export default Grid;
