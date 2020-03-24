import React from "react";
import Search from "../Search/Search";
import "./Profile.css";

const Profile = ({
  name,
  address,
  city,
  country,
  symbol,
  sector,
  marketCap,
  employees,
  webURL
}) => {
  return (
    <div className="profileDiv">
      <h1>Company Snapshot:</h1>
      <h2>
        {name} {symbol}
      </h2>
      <h4>
        {address}, {city} {country}
      </h4>
      <h4>Market Cap: {marketCap}</h4>
      <h4></h4>
      <h4>Sector: {sector}</h4>
      <h4>Employees: {employees}</h4>
      <h3>
        <a href={webURL}>Company Website</a>
      </h3>
    </div>
  );
};

export default Profile;
