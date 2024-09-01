import React, { useEffect, useState } from "react";
import "./styles.css";

import { get100Coins } from "../../../functions/get100Coins";
import { MenuItem, Select } from "@mui/material";

const SelectCoins = ({allCoins, crypto1, crypto2, handleCoinChange }) => {

  const styles = {
    height: "2.4rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  return (
    <div className="coins-flex">
      <p>Crypto 1</p>
      <Select
        className="range-select"
        sx={styles}
        value={crypto1}
        onChange={(event) => handleCoinChange(event)}
      >
        {allCoins
          .filter((item) => item.id != crypto2)
          .map((coin, idx) => (
            <MenuItem key={idx} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>

      <p>Crypto 2</p>
      <Select
        className="range-select"
        sx={styles}
        value={crypto2}
        onChange={(event) => handleCoinChange(event, true)}
      >
        {allCoins
          .filter((item) => item.id != crypto1)
          .map((coin, idx) => (
            <MenuItem key={idx} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};

export default SelectCoins;
