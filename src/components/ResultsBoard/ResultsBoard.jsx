import React from "react";
import FlightsTableHeader from "../FlightsTableHeader/FlightsTableHeader.jsx";
import FlightsTabs from "../FlightsTabs/FlightsTabs.jsx";
import FlightData from "../FlightData/FlightData.jsx";
import useResultsBoard from "./useResultsBoard";

const ResultsBoard = () => {
  const { flights } = useResultsBoard();

  return (
    <div className="flights-list">
      <FlightsTabs />
      <div className="flights-list__table-wrapper">
        <table className="flights-list__table flights-table">
          <FlightsTableHeader />
          <tbody>
            {flights.map((flight) => {
              return <FlightData key={flight.id} {...flight} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsBoard;
