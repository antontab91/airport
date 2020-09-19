import React from 'react';
import { FlightTakeoff, FlightLand } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const FlightsList = () => {
  const classes = useStyles();
  return (
    <div className="flights-list">
      <div className="flights-list__tabs">
        <div className="flights-list__btn flights-list__btn_arrivals">
          <FlightTakeoff className={`${classes.root} hui`} />
          <span>Departures</span>
        </div>
        <div className="flights-list__btn flights-list__btn_departures">
          <FlightLand />
          <span>Arrivals</span>
        </div>
      </div>
      <div className="flights-list__table-wrapper">
        <table className="flights-list__table flights-table">
          <thead className="flights-list__header">
            <tr>
              <th>Terminal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FlightsList;