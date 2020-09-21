export const FLIGHTS_LISTS_RECEIVED = 'FLIGHTS/FLIGHTS_LISTS_RECEIVED';

export const tasksListsReceived = (flightsLists) => {
  return {
    type: FLIGHTS_LISTS_RECEIVED,
    payload: flightsLists,
  }
}

getFlightsLists = () => {

}