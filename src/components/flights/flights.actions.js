import { Today } from '@material-ui/icons';
import moment from 'moment';
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

export const getFlightsLists = () => {
  return function (dispatch) {
    return fetchFlightsList()
      .then((flightsLists) => {

        const { departure, arrival } = flightsLists.body;

        const sortedDepartures = departure
          .slice()                                                                                         //скопировал
          .filter((flight) => {                                                                            //фильтранул те что сегодня
            return moment(flight.timeDepShedule).format('DD-MM-YYYY') === moment().format('DD-MM-YYYY');
          })
          .sort((a, b) => {                                                                                //сортанул по дате вылета 
            return moment(a.timeDepShedule).valueOf - moment(b.timeDepShedule).valueOf
          })
          .map((flight) => {                                                                               //перезаписал для удобства нужные значения каждого вылета
            return {
              id: flight.ID,
              term: flight.term,
              flightTime: moment(flight.timeDepShedule).format('HH:mm'),
              destination: flight['airportToID.city_en'],
              status: flight.status,
              airlineLogo: flight.airline.en.logoSmallName,
              airlineName: flight.airline.en.name,
              flightNumber: flight['carrierID.IATA'] + flight.fltNo,
            }
          })

        const sortedArrival = arrival.slice()
          .filter((flight) => {
            return moment(flight.timeLandCalc).format('DD-MM-YYYY') === moment().format('DD-MM-YYYY');
          })
          .sort((a, b) => {
            return moment(a.timeLandCalc).valueOf - moment(b.timeLandCalc).valueOf
          })
          .map((flight) => {
            return {
              id: flight.ID,
              term: flight.term,
              flightTime: moment(flight.timeLandCalc).format('HH:mm'),
              destination: flight["airportFromID.name_en"],
              status: flight.status,
              airlineLogo: flight.airline.en.logoSmallName,
              airlineName: flight.airline.en.name,
              flightNumber: flight['carrierID.IATA'] + flight.fltNo,
            }
          })


        const sortedFlightsLists = {
          departure: sortedDepartures,
          arrival: sortedArrival
        }

        console.log(sortedFlightsLists);
        dispatch(flightsListsReceived(sortedFlightsLists));
      })
  }
}