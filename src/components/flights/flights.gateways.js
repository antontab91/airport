import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';
const today = moment().format('DD-MM-YYYY');

export const fetchFlightsList = () => {
  return fetch(`${baseUrl}/${today}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('failed to load flights list')
    })
}


