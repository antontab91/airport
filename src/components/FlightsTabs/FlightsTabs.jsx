import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { FlightTakeoff, FlightLand } from '@material-ui/icons';

const FlightsTabs = ({ departuresClass, arrivalsClass }) => {
  return (
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
  )
}

FlightsTabs.propTypes = {
  departuresClass: PropTypes.string.isRequired,
  arrivalsClass: PropTypes.string.isRequired,
}

export default FlightsTabs;