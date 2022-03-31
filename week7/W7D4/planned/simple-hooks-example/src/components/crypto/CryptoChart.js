import { Line } from "react-chartjs-2";

const timeFormat = {
  type: "time",
  time: {
    displayFormats: {
      millisecond: "MMM DD",
      second: "MMM DD",
      minute: "MMM DD",
      hour: "MMM DD",
      day: "MMM DD",
      week: "MMM DD",
      month: "MMM DD",
      quarter: "MMM DD",
      year: "MMM DD",
    },
  },
};
const options = {
  scales: {
    x: timeFormat,
    y: { ticks: { callback: (value) => "$" + value.toFixed(2) } },
  },
};
const color = "#007bff";

export function ChartPresentation({ chartData }) {
  console.log(chartData);
  if (!chartData) return "";

  const prices = chartData.prices.map((dataPoint) => ({
    x: dataPoint[0],
    y: dataPoint[1],
  }));
  console.log(prices);
  const data = {
    labels: prices.map((price) => new Date(price.x).toDateString()),
    legend: false,

    datasets: [
      {
        fill: false,
        bezierCurve: false,
        tension: 0,
        backgroundColor: color,
        borderColor: color + "66",
        label: "Prices",
        data: prices.map((price) => price.y),
      },
    ],
  };
  return <Line data={data} options={options} />;
}
