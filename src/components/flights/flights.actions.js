import { fetchFlightsList } from './flights.gateways';

export const FLIGHTS_LISTS_RECEIVED = 'FLIGHTS/FLIGHTS_LISTS_RECEIVED';

const tasksListsReceived = (flightsLists) => {
  return {
    type: FLIGHTS_LISTS_RECEIVED,
    payload: flightsLists,
  }
}

export const getFlightsLists = (date) => {
  return function (dispatch) {
    return fetchFlightsList(date)
      .then((flightsLists) => {
        // console.log(flightsLists)
        dispatch(tasksListsReceived(flightsLists));
      })
  }
}