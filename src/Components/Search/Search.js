import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import Table from "../Table/Table";
import Profile from "../Profile/Profile";
import Chart from "../Chart/Chart";

const Search = () => {
  const [hasErrors, setErrors] = useState();

  const [pickedStockName, setPickedStockName] = useState();
  const [pickedStockAddress, setPickedStockAddress] = useState();
  const [pickedStockCity, setPickedStockCity] = useState();
  const [pickedStockCountry, setPickedStockCountry] = useState();
  const [pickedStockDescription, setPickedStockDescription] = useState();
  const [pickedStockTicker, setPickedStockTicker] = useState();
  const [pickedStockSector, setPickedStockSector] = useState();
  const [
    pickedStockMarketCapitalization,
    setPickedStockMarketCapitalization
  ] = useState();
  const [pickedStockEmployeeTotal, setPickedStockEmployeeTotal] = useState();
  const [pickedStockWebURL, setPickedStockWebURL] = useState();
  const [pickedStockChartData, setPickedStockChartData] = useState();

  //Chart variables

  const [stockChartXValues, setStockChartXValues] = useState();
  const [stockChartYValues, setStockChartYValues] = useState();

  const [pickedStockOpen, setPickedStockOpen] = useState();
  const [pickedStockHigh, setPickedStockHigh] = useState();
  const [pickedStockLow, setPickedStockLow] = useState();
  const [pickedStockClose, setPickedStockClose] = useState();

  const token = "bps0henrh5re0jhji9kg";

  const alphaAPIKey = "T9GE3M9DE5AEMCJL";

  const handleClick = e => {
    const stockPicked = document
      .getElementById("stockInput")
      .value.toUpperCase();
    e.preventDefault();

    const stock = e.target.value;
    async function getStockInfo() {
      let stockChartXValuesFunction = [];
      let stockChartYValuesFunction = [];
      let stockChartNews = [];

      const results = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${stockPicked}&token=${token}`
      );
      const profile = await axios.get(
        `https://finnhub.io/api/v1/stock/profile?symbol=${stockPicked}&token=${token}`
      );

      // const news = await axios.get(
      //   `https://finnhub.io/api/v1/news?symbol=${stockPicked}&token=${token}`
      // );

      const chartData = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&interval=5min&apikey=${alphaAPIKey}`
      );

      for (const key in chartData["data"]["Time Series (Daily)"]) {
        stockChartXValuesFunction.push(key);
        stockChartYValuesFunction.push(
          chartData["data"]["Time Series (Daily)"][key]["4. close"]
        );
      }

      // for (const key in news["data"]) {
      //   stockChartNews.push(news.data[key]["0"]);
      // }

      console.log(results.data);

      // console.log(stockChartNews);

      setPickedStockOpen(results.data.o.toFixed(2));
      setPickedStockHigh(results.data.h.toFixed(2));
      setPickedStockLow(results.data.l.toFixed(2));
      setPickedStockClose(results.data.pc.toFixed(2));
      setPickedStockName(profile.data.name);
      setPickedStockAddress(profile.data.address);
      setPickedStockCity(profile.data.city);
      setPickedStockCountry(profile.data.country);
      setPickedStockDescription(profile.data.description);
      setPickedStockTicker(profile.data.ticker);
      setPickedStockSector(profile.data.gsector);
      setPickedStockMarketCapitalization(profile.data.marketCapitalization);
      setPickedStockEmployeeTotal(profile.data.employeeTotal);
      setPickedStockWebURL(profile.data.weburl);
      setPickedStockChartData(chartData);
      setStockChartXValues(stockChartXValuesFunction);
      setStockChartYValues(stockChartYValuesFunction);
    }
    getStockInfo();
  };

  return (
    <div>
      <Profile
        name={pickedStockName}
        address={pickedStockAddress}
        city={pickedStockCity}
        country={pickedStockCountry}
        symbol={pickedStockTicker}
        sector={pickedStockSector}
        marketCap={pickedStockMarketCapitalization}
        employees={pickedStockEmployeeTotal}
        webURL={pickedStockWebURL}
      />
      <Chart
        name={pickedStockName}
        xValues={stockChartXValues}
        yValues={stockChartYValues}
      />
      <Table
        open={pickedStockOpen}
        high={pickedStockHigh}
        low={pickedStockLow}
        close={pickedStockClose}
      />
      <form onSubmit={handleClick}>
        <input
          className="inputs"
          defaultValue="MSFT"
          id="stockInput"
          type="text"
          placeholder="Enter Stock Symbol Here.."
        />
        <input
          className="inputs"
          id="stockSubmit"
          type="submit"
          name="search"
          value="Search"
        />
      </form>
    </div>
  );
};

export default Search;
