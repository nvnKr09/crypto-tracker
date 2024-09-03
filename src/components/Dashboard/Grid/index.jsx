import React, { useState } from "react";
import "./styles.css";

import TrendingUpIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownIcon from "@mui/icons-material/TrendingDownRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StarRounded } from "@mui/icons-material";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import { isWatchlisted } from "../../../functions/isWatchlisted";

const Grid = ({ coin, isWatchlistPage, delay, notifyRemove }) => {
  const [isAdded, setIsAdded] = useState(isWatchlisted(coin.id)); //returns true/false

  const onWatchlistBtnClick =(e)=>{
    e.preventDefault();
    if (isAdded) {
      removeFromWatchlist(coin.id);
      setIsAdded(false);
      if (isWatchlistPage) {
        notifyRemove();  // notifying parent
      }
    } else {
      addToWatchlist(coin.id);
      setIsAdded(true);
    }
  }

  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className={
          coin.price_change_percentage_24h > 0
            ? "grid-container"
            : "grid-container grid-container-red"
        }
        style={{display: isWatchlistPage && !isAdded && "none"}}
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
            onClick={onWatchlistBtnClick}
          >
            {isAdded ? (
              <StarRounded style={{ fontSize: "2rem" }} />
            ) : (
              <StarOutlineRoundedIcon style={{ fontSize: "2rem" }} />
            )}
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
          <p className="total-volume">
            Total Volume: {coin.total_volume.toLocaleString()}
          </p>
          <p className="market-cap">
            Market Cap: ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Grid;
