import React, { useState, useEffect } from "react";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import { getAllSpendings } from "../utils/storage";
import { getSummaryByCategory, getTotalByMonth, getTotalAllTime } from "../utils/summary";

const Dashboard = () => {
  const [filter, setFilter] = useState("Monthly");
  const [spendings, setSpendings] = useState([]);

  useEffect(() => {
    setSpendings(getAllSpendings());
  }, []);

  const totalAll = getTotalAllTime(spendings);
  const totalMonth = getTotalByMonth(spendings, new Date());

  const summary = getSummaryByCategory(spendings, filter);

  return (
    <div>
      <h2>Analytics Dashboard</h2>

      <div>
        <label>View: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Total Spending (All Time):</strong> {totalAll}</p>
        <p><strong>Total Spending (This Month):</strong> {totalMonth}</p>
      </div>

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <LineChart data={spendings} />
        <PieChart data={spendings} />
      </div>
    </div>
  );
};

export default Dashboard;