import moment from 'moment';

const today = moment().format('DD-MM-YYYY');
const formatDate = (date) => {
  return moment(date).format('DD-MM-YYYY')
}

export const arrivalsSelector = state => {
  const { arrivals, searchFlight } = state.flights;
  const filteredArrivals = arrivals
    .slice()
    .filter((el) => {
      return formatDate(el.timeLandCalc) === today;
    })

  if (!searchFlight) {
    return filteredArrivals;
  }
}

export const departuresSelector = state => {
  const { departures, searchFlight } = state.flights;
  const filteredDepartures = departures
    .slice()
    .filter((el) => {
      return formatDate(el.timeDepShedule) === today
    })

  if (!searchFlight) {
    return filteredDepartures;
  }
}