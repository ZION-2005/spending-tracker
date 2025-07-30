import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const categoryTotals = {};
  data.forEach(entry => {
    categoryTotals[entry.category] = (categoryTotals[entry.category] || 0) + entry.amount;
  });

  return (
    <div style={{ width: "400px" }}>
      <h4>Pie Chart (Spending by Category)</h4>
      <Pie
        data={{
          labels: Object.keys(categoryTotals),
          datasets: [
            {
              data: Object.values(categoryTotals),
              backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56", "#4bc0c0", "#9966ff"],
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;