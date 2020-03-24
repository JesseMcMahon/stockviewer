import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Table from "../Table/Table";
import Profile from "../Profile/Profile";
import Chart from "../Chart/Chart";
import News from "../News/News";

const Search = () => {
  // const [hasErrors, setErrors] = useState();

  //profile variables

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

  //News variables

  const [pickedStockNewsStoryOne, setPickedStockNewsStoryOne] = useState();
  const [pickedStockNewsStoryTwo, setPickedStockNewsStoryTwo] = useState();
  const [pickedStockNewsStoryThree, setPickedStockNewsStoryThree] = useState();
  const [pickedStockNewsStoryFour, setPickedStockNewsStoryFour] = useState();
  const [pickedStockNewsStoryFive, setPickedStockNewsStoryFive] = useState();

  const [
    pickedStockNewsStoryOneURL,
    setPickedStockNewsStoryOneURL
  ] = useState();
  const [
    pickedStockNewsStoryTwoURL,
    setPickedStockNewsStoryTwoURL
  ] = useState();
  const [
    pickedStockNewsStoryThreeURL,
    setPickedStockNewsStoryThreeURL
  ] = useState();
  const [
    pickedStockNewsStoryFourURL,
    setPickedStockNewsStoryFourURL
  ] = useState();
  const [
    pickedStockNewsStoryFiveURL,
    setPickedStockNewsStoryFiveURL
  ] = useState();

  //table variables

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

    const emptyChartData = () => {
      let stockChartXValues = [];
      let stockChartYValues = [];
    };

    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    async function getStockInfo() {
      const results = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${stockPicked}&token=${token}`
      );
      const profile = await axios.get(
        `https://finnhub.io/api/v1/stock/profile?symbol=${stockPicked}&token=${token}`
      );

      const news = await axios.get(
        `https://finnhub.io/api/v1/news?symbol=${stockPicked}&token=${token}`
      );

      const chartData = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockPicked}&outputsize=compact&interval=5min&apikey=${alphaAPIKey}`
      );

      for (const key in chartData["data"]["Time Series (Daily)"]) {
        stockChartXValuesFunction.push(key);
        stockChartYValuesFunction.push(
          chartData["data"]["Time Series (Daily)"][key]["4. close"]
        );
        setStockChartXValues(stockChartXValuesFunction);
        setStockChartYValues(stockChartYValuesFunction);
      }

      console.log(results.data);
      console.log(news);
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
      setPickedStockNewsStoryOne(news.data[0]["headline"]);
      setPickedStockNewsStoryTwo(news.data[1]["headline"]);
      setPickedStockNewsStoryThree(news.data[2]["headline"]);
      setPickedStockNewsStoryFour(news.data[3]["headline"]);
      setPickedStockNewsStoryFive(news.data[4]["headline"]);

      setPickedStockNewsStoryOneURL(news.data[0]["url"]);
      setPickedStockNewsStoryTwoURL(news.data[1]["url"]);
      setPickedStockNewsStoryThreeURL(news.data[2]["url"]);
      setPickedStockNewsStoryFourURL(news.data[3]["url"]);
      setPickedStockNewsStoryFiveURL(news.data[4]["url"]);
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
      <News
        newsOne={pickedStockNewsStoryOne}
        newsOneURL={pickedStockNewsStoryOneURL}
        newsTwo={pickedStockNewsStoryTwo}
        newsTwoURL={pickedStockNewsStoryTwoURL}
        newsThree={pickedStockNewsStoryThree}
        newsThreeURL={pickedStockNewsStoryThreeURL}
        newsFour={pickedStockNewsStoryFour}
        newsFourURL={pickedStockNewsStoryFourURL}
        newsFive={pickedStockNewsStoryFive}
        newsFiveURL={pickedStockNewsStoryFiveURL}
      />
      <form onSubmit={handleClick}>
        <input
          className="inputs"
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
