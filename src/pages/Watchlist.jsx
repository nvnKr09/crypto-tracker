import React, { useEffect, useState } from "react";
import { get100Coins } from "../functions/get100Coins";
import TabsComponent from "../components/Dashboard/Tabs";
import Loader from "../components/Common/Loader";
import { Link } from "react-router-dom";
import Button from "../components/Common/Button";

const WatchlistPage = () => {
  const [toggle, setToggle] = useState(false);
  const [watchlistData, setWatchlistData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [toggle]);
  
  const getData = async () => {
    setIsLoading(true);
    const coins = JSON.parse(localStorage.getItem("watchlist"));
    if (!coins || coins.length === 0) {
      setWatchlistData([]);
      setIsLoading(false);
      return;
    }
    const allCoins = await get100Coins();
    if (coins) {
      setWatchlistData(allCoins.filter((item) => coins.includes(item.id)));
    }
    setIsLoading(false);
  };

  const notifyRemove = () => {
    setToggle((prev) => !prev);
  }

  if (isLoading) return <Loader />;

  return (
    <>
      {watchlistData.length == 0 ? (
        <div
          className="empty-watchlist-msg"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "2rem",
            padding: "1rem",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          <h2>No Item in the Watchlist</h2>
          <Link to={"/dashboard"}>
            <Button text={"Go to Dashboard"} />
          </Link>
        </div>
      ) : (
        <div>
          <TabsComponent coins={watchlistData} isWatchlistPage={true} notifyRemove={notifyRemove} />
        </div>
      )}
    </>
  );
};

export default WatchlistPage;
