import React from 'react';
import { FlightTakeoff, FlightLand } from '@material-ui/icons';

const FlightsList = () => {
  return (
    <div className="flights-list">
      <div className="flights-list__tabs">
        <div className="flights-list__btn flights-list__btn_arrivals">
          <FlightTakeoff style={{ fontSize: 40, color: "#000" }} />
          <span>Departures</span>
        </div>
        <div className="flights-list__btn flights-list__btn_departures">
          <FlightLand />
          <span>Arrivals</span>
        </div>
      </div>
    </div>
  )
}

export default FlightsList;