import React from "react";
import './styles.css';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function TogglePriceType({priceType, handlePriceTypeChange}) {

  return (
    <div className="toggle-prices">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
            "&.Mui-selected": {
                color: "var(--blue) !important",
            },
            borderColor: "var(--blue)",
            border: "unset !important",
            "& .MuiToggleButtonGroup-grouped": {
                border: "1px solid !important",
                borderColor: "unset",
                color: "var(--blue)",
            },
        }}  
      >
        <ToggleButton className="toggle-btn" value="prices">PRICE</ToggleButton>
        <ToggleButton className="toggle-btn" value="total_volumes">TOTAL VOLUME</ToggleButton>
        <ToggleButton className="toggle-btn" value="market_caps">MARKET CAP</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
