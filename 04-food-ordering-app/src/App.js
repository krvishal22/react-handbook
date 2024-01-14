import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/dashboard/Dashboard";
import "./app.css";
const AppLayout = () => {
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
