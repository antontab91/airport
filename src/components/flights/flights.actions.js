import { fetchFlightsList } from './flights.gateways';

export const FLIGHTS_LISTS_RECEIVED = 'FLIGHTS/FLIGHTS_LISTS_RECEIVED';

const flightsListsReceived = (flightsLists) => {
  return {
    type: FLIGHTS_LISTS_RECEIVED,
    payload: flightsLists,
  }
}

export const getFlightsLists = (date) => {
  return function (dispatch) {
    return fetchFlightsList(date)
      .then((flightsLists) => {
        dispatch(flightsListsReceived(flightsLists));
      })
  }
}