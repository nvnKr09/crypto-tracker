import React from "react";
import "./styles.css";

import TrendingUpIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownIcon from "@mui/icons-material/TrendingDownRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { Tooltip } from "@mui/material";
import { convertNumbers } from "../../../functions/convertNumbers";

const List = ({ coin }) => {
  return (
    <tbody>
    <tr className="list-row">
      <Tooltip title="Logo">
        <td className="img">
          <img className="coin-logo" src={coin.image} />
        </td>
      </Tooltip>

      <Tooltip title="Info" placement="bottom-start">
        <td className="name">
          <div className="name-wrapper">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>
      </Tooltip>

      <td className="chip-flex">
        <Tooltip title="Price % Change in 24h">
          <div
            className={
              coin.price_change_percentage_24h > 0
                ? "price-chip"
                : "price-chip chip-red"
            }
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        </Tooltip>

        <Tooltip title="See Graph">
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
        </Tooltip>
      </td>

{/* desktop-view */}
      <Tooltip title="Current Price">
        <td
          className={
            coin.price_change_percentage_24h > 0
              ? "coin-price desktop-view"
              : "coin-price desktop-view coin-price-red"
          }
        >
          ${coin.current_price.toFixed(2).toLocaleString()}
        </td>
      </Tooltip>

      {/* mobile view */}
      <Tooltip title="Current Price">
        <td
          className={
            coin.price_change_percentage_24h > 0
              ? "coin-price mobile-view"
              : "coin-price mobile-view coin-price-red"
          }
        >
          ${convertNumbers(coin.current_price)}
        </td>
      </Tooltip>

      <Tooltip title="Total Volume">
        <td className="total-volume">{coin.total_volume.toLocaleString()}</td>
      </Tooltip>

{/* desktop view */}
      <Tooltip title="Market Cap">
        <td className="desktop-view">
          <p className="market-cap">${coin.market_cap.toLocaleString()}</p>
        </td>
      </Tooltip>

{/* mobile view */}
      <Tooltip title="Market Cap">
        <td className="mobile-view" >
          <p className="market-cap">${convertNumbers(coin.market_cap)}</p>
        </td>
      </Tooltip>

      <Tooltip title="Add to Watchlist">
        <td className="watchlist">
          <div
            className={
              coin.price_change_percentage_24h > 0
                ? "watchlist-chip"
                : "watchlist-chip chip-red"
            }
          >
            <StarOutlineRoundedIcon style={{ fontSize: "2rem" }} />
          </div>
        </td>
      </Tooltip>
    </tr>
    </tbody>
  );
};

export default List;
