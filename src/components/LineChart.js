import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = ({ data }) => {
  const labels = data.map(d => d.date);
  const amounts = data.map(d => d.amount);

  return (
    <div style={{ width: "500px" }}>
      <h4>Line Chart (All Spending)</h4>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "Spending",
              data: amounts,
              borderColor: "blue",
              fill: false,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;