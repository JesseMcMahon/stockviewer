import React from "react";
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
            marker: { color: "#03dac5" }
          }
        ]}
        layout={{
          yaxis: {
            tickformat: "$"
          },
          paper_bgcolor: "#2c2c2c",
          plot_bgcolor: "#2c2c2c",
          borderRadius: "10%",
          width: 700,
          height: 440,
          title: name,
          titlefont: {
            size: 36,
            color: "#03dac5",
            family: "Courier New, monospace"
          }
        }}
      />
    </div>
  );
};

export default Chart;
