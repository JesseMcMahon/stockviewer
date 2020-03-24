import React from "react";
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
      <h1>Company Snapshot</h1>
      <h2>{name}</h2>
      <h4>Symbol: {symbol}</h4>
      <h4>
        {address}, {city} {country}
      </h4>
      <h4>Market Cap: {marketCap}</h4>
      <h4>Sector: {sector}</h4>
      <h4>Employees: {employees}</h4>
      <h3>
        <a target="_blank" rel="noopener noreferrer" href={webURL}>
          Company Website
        </a>
      </h3>
    </div>
  );
};

export default Profile;
