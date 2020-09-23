import { fetchFlightsList } from './flights.gateways';

export const FLIGHTS_LISTS_RECEIVED = 'FLIGHTS/FLIGHTS_LISTS_RECEIVED';
export const SEARCH_FLIGHTS = 'FLIGHTS/SEARCH_FLIGHTS';

const flightsListsReceived = (flightsLists) => {
  return {
    type: FLIGHTS_LISTS_RECEIVED,
    payload: flightsLists,
  }
}

export const searchFlight = (searchData) => {
  return {
    type: SEARCH_FLIGHTS,
    payload: searchData,
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