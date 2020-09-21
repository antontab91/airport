import { fetchFlightsList } from './flights.gateways';

export const FLIGHTS_LISTS_RECEIVED = 'FLIGHTS/FLIGHTS_LISTS_RECEIVED';

const tasksListsReceived = (flightsLists) => {
  return {
    type: FLIGHTS_LISTS_RECEIVED,
    payload: flightsLists,
  }
}

export const getFlightsLists = () => {
  return function (dispatch) {
    return fetchFlightsList()
      .then((flightsLists) => {
        dispatch(tasksListsReceived(flightsLists));
      })
  }
}