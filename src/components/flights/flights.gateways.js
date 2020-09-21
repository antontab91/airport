import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';
const dayDate = moment().format('DD-MM-YYYY');
// const headers = {
//   "Content-type": "application/json;charset=utf-8",
// };
// console.log(dayDate)


export const fetchFlightsList = () => {
  return fetch(`${baseUrl}/${dayDate}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      return new Error('failed to load flights list')
    })
}
// fetchFlightsList().then((suka) => { console.log(suka.body.arrival) })


