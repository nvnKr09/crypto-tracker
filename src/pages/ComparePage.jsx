import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/convertCoin";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData } from "../functions/settingCharData";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import LineChart from "../components/Coin/LineChart";
import { get100Coins } from "../functions/get100Coins";
import TogglePriceType from "../components/Coin/PriceType";

const ComparePage = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});
  const [days, setDays] = useState(30);

  //
  useEffect(() => {
    getData();
  }, []);

  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2, crypto1, crypto2);
    setIsLoading(false);
  }

  const getData = async () => {
    setIsLoading(true);
    const totalCoins = await get100Coins();
    if (totalCoins) {
      setAllCoins(totalCoins);
    }

    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    coinObject(setCrypto1Data, data1);
    coinObject(setCrypto2Data, data2);
    const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);
    settingChartData(setChartData, prices1, prices2, crypto1, crypto2);
    // console.log("Both prices fetched", prices1, prices2);
    setIsLoading(false);
  };

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);

      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(event.target.value, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2, crypto1, event.target.value);
        // console.log("Both prices fetched", prices1, prices2);
      }
    } else {
      setCrypto1(event.target.value);
      const data2 = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data2);

      const prices1 = await getCoinPrices(event.target.value, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2, event.target.value, crypto2);
        // console.log("Both prices fetched", prices1, prices2);
      }
    }
    setIsLoading(false);
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2, crypto1, crypto2);
    setIsLoading(false);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="coins-days-flex">
        <SelectCoins
          allCoins={allCoins}
          crypto1={crypto1}
          crypto2={crypto2}
          handleCoinChange={handleCoinChange}
        />
        <SelectDays days={days} handleDaysChange={handleDaysChange} />
      </div>
      <div className="grey-wrapper grey-list">
        <table>
          <List coin={crypto1Data} />
        </table>
      </div>
      <div className="grey-wrapper grey-list">
        <table>
          <List coin={crypto2Data} />
        </table>
      </div>
      <div className="grey-wrapper">
        <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
        <LineChart
          chartData={chartData}
          priceType={priceType}
          multiAxis={true}
        />
      </div>
      <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
      <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
    </>
  );
};

export default ComparePage;
