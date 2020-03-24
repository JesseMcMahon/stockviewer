import React, { useState } from "react";
import "./Chart.css";
import Plot from "react-plotly.js";

const Chart = ({ xValues, yValues, name }) => {
  return (
    <div className="stockChart">
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "#bb86fc" }
          }
        ]}
        layout={{
          paper_bgcolor: "#2c2c2c",
          plot_bgcolor: "#2c2c2c",
          borderRadius: "10%",
          width: 700,
          height: 440,
          title: { name }
        }}
      />
    </div>
  );
};

export default Chart;
