import React, { useState } from "react";
import "./styles.css";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "../Grid";
import List from "../List";

const TabsComponent = ({ coins }) => {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    fontSize: "1rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "Capitalize",
  };

  const theme = createTheme({
    pallete: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="grid" value="grid" sx={style} />
          <Tab label="list" value="list" sx={style} />
        </TabList>
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, idx) => (
              <Grid coin={coin} key={idx} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.map((coin, idx) => (
              <List coin={coin} key={idx} />
            ))}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
};

export default TabsComponent;
