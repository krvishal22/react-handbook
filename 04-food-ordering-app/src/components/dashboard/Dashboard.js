import React from "react";
import dataList from "../../mocks/restaurantListMockData.json";
import Card from "../../shared-ui/card/Card";
import Header from "../../shared-ui/header/Header";
import "./Dashboard.scss";

const Dashboard = () => {
  const { SECTION_SEARCH_RESULT } = dataList;

  return (
    <div>
      <Header />
      <div className="res-container">
        {SECTION_SEARCH_RESULT.map((res) => (
          <Card res={res} key={res.info.resId} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
