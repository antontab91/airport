import moment from 'moment';
const today = moment().format('DD-MM-YYYY');

export const arrivalsSelector = state => {
  const { arrivals, searchFlight } = state.flights;

  const filteredArrivals = arrivals.slice().filter((el) => {
    return moment(el.timeLandCalc).format('DD-MM-YYYY') === today
  })

  if (!searchFlight) {
    return filteredArrivals;
  }
}

export const departuresSelector = state => {
  const { departures, searchFlight } = state.flights;
  const filteredDepartures = departures.slice().filter((el) => {
    return moment(el.timeDepShedule).format('DD-MM-YYYY') === today
  })

  if (!searchFlight) {
    return filteredDepartures;
  }
}