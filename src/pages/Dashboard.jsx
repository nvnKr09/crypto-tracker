import React, { useEffect, useState } from "react";

import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";

import { inputValidation } from "../functions/inputValidation";
import { get100Coins } from "../functions/get100Coins";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const total_Fetched_Coins = await get100Coins();
    if(total_Fetched_Coins) {
      setCoins(total_Fetched_Coins);
      setPaginatedCoins(total_Fetched_Coins.slice(0, 10));
      setIsLoading(false);
    }
    
  }

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    try {
      // console.log(e.target.value);
      inputValidation(e.target.value);
      setSearch(e.target.value);
    } catch (error) {
      console.log(error);
    }
  };

  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <Loader />;
  
  return (
    <>
      {/* <Header /> */}
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
    </>
  );
};

export default DashboardPage;
