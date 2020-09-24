import React from 'react';

const FlightsTabs = () => {
  <div className="flights-list__tabs">
    <Link
      to={`/departures`}
      className={`flights-list__tab-btn flights-list__tab-btn_departures ${departuresClass} `}
    >
      <FlightTakeoff className="flights-list__icon" />
      <span>Departures</span>
    </Link>

    <Link
      to={`/arrivals`}
      className={`flights-list__tab-btn flights-list__tab-btn_arrivals ${arrivalsClass} `}
    >
      <FlightLand className="flights-list__icon" />
      <span>Arrivals</span>
    </Link>
  </div>
}

export default FlightsTabs;