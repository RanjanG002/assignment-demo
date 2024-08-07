import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "", { role: "style" }],
  ["5", 3, "#326dd7"], 
  ["", 10, "#326dd7"],
  ["9", 4, "#326dd7"],
  ["", 3, "color: #326dd7"],
  ["", 3, "color: #326dd7"],
  ["11", 6, "color: #326dd7"], 
  ["", 6, "color: #326dd7"],
  ["", 5.5, "color: #326dd7"],
  ["13", 5.5, "color: #326dd7"],
  ["", 4.5, "color: #326dd7"],
  ["15", 2, "color: #326dd7"],
  ["", 6.5, "color: #326dd7"],
  ["", 7, "color: #326dd7"],
  ["17", 6, "color: #326dd7"],
  ["", 10.5, "color: #326dd7"],
  ["19", 9, "color: #326dd7"],
  ["", 12, "color: #326dd7"],
  ["21", 15.5, "color: #326dd7"],
  ["", 11.5, "color: #326dd7"],
  ["", 8, "color: #326dd7"],
  ["23", 4.8, "color: #326dd7"],
  ["", 5.5, "color: #326dd7"],
  ["25", 10.5, "color: #326dd7"],
  ["", 7.5, "color: #326dd7"],
  ["27", 5.5, "color: #326dd7"],
];
export const options = {
  title: "Activity",
  backgroundColor: "#172030",
  fontcolor: "white",
};

export function ActivityGraph() {
  return (
    <>
      <Chart
        chartType="ColumnChart"
        width="690px"
        height="180px"
        data={data}
        options={options}
      />
    </>
  );
}
