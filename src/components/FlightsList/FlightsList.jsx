import React from 'react';
import { useState } from 'react'
import { FlightTakeoff, FlightLand } from '@material-ui/icons';

const FlightsList = () => {
  const [state, setstate] = useState(true);

  const toggle = () => {
    setstate(!state)
  }

  return (
    <div className="flights-list">
      <div className="flights-list__tabs">
        <div onClick={toggle} className={`flights-list__tab-btn flights-list__tab-btn_departures ${!state ? "active" : ""} `}>
          <FlightTakeoff className="flights-list__icon" />
          <span>Departures</span>
        </div>
        <div onClick={toggle} className={`flights-list__tab-btn flights-list__tab-btn_arrivals ${state ? "active" : ""} `}>
          <FlightLand className="flights-list__icon" />
          <span>Arrivals</span>
        </div>
      </div>
      <div className="flights-list__table-wrapper">
        <table className="flights-list__table flights-table">
          <thead className="flights-table__header">
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
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
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