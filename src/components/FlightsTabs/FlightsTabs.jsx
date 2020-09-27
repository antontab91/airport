import React from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FlightTakeoff, FlightLand } from "@material-ui/icons";

import { ROUTES } from "../../constants";

const FlightsTabs = () => {
  const { pathname, search } = useLocation();

  return (
    <div className="flights-list__tabs">
      <Link
        to={`${ROUTES.DEPARTURE}${search}`}
        className={classnames(
          "flights-list__tab-btn flights-list__tab-btn_departures",
          { active: pathname === ROUTES.DEPARTURE }
        )}
      >
        <FlightTakeoff className="flights-list__icon" />
        <span>Departures</span>
      </Link>
      <Link
        to={`${ROUTES.ARRIVAL}${search}`}
        className={classnames(
          `flights-list__tab-btn flights-list__tab-btn_arrivals`,
          { active: pathname === ROUTES.ARRIVAL }
        )}
      >
        <FlightLand className="flights-list__icon" />
        <span>Arrivals</span>
      </Link>
    </div>
  );
};

export default FlightsTabs;
