import React from "react";
import "./News.css";

const News = ({
  newsOne,
  newsTwo,
  newsThree,
  newsFour,
  newsFive,
  newsOneURL,
  newsTwoURL,
  newsThreeURL,
  newsFourURL,
  newsFiveURL
}) => {
  return (
    <div className="newsDiv">
      <h1>Top News Stories</h1>
      <ul>
        <li>
          <a href={newsOneURL}>{newsOne}</a>
        </li>
        <li>
          <a href={newsTwoURL}>{newsTwo}</a>
        </li>
        <li>
          <a href={newsThreeURL}>{newsThree}</a>
        </li>
        <li>
          <a href={newsFourURL}>{newsFour}</a>
        </li>
        <li>
          <a href={newsFiveURL}>{newsFive}</a>
        </li>
      </ul>
    </div>
  );
};

export default News;
