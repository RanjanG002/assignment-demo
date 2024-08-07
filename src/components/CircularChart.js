import DonutChart from "react-donut-chart";

const reactDonutChartdata = [
  {
    value: 30,
  },
  {
    value: 70,
  },
];

const reactDonutChartBackgroundColor = ["#0f1858", "#1830e1"];
const reactDonutChartInnerRadius = 0.6;

export default function CircularChart() {
  return (
    <div className="App">
      <DonutChart
        width={150}
        data={reactDonutChartdata}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
      />
    </div>
  );
}
