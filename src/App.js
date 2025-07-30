import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";

function App() {
  return (
    <div>
      <header style={{ padding: "10px", background: "#f0f0f0" }}>
        <nav>
          <Link to="/" style={{ marginRight: "20px" }}>Dashboard</Link>
          <Link to="/journal">Journal</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;