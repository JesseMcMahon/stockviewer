import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Components/Search/Search";
import Table from "./Components/Table/Table";

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
