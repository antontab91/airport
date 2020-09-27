import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { flightsByPathnameSelector, departuresSelector } from '../flights/flights.selectors';
import { getFlightsLists } from '../flights/flights.actions';

const useResultsBoard = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch(); // "useDispatch" аналог mapDispatch, заменяе connect в хуках

  useEffect(() => {
    dispatch(getFlightsLists())
  }, []) // "useEffect(() => {}, []" аналог componentDidMount

  const flights = useSelector(state => flightsByPathnameSelector(state, pathname)); // "useSelector" аналог mapState, заменяе connect в хуках

  return {
    flights
  }
}

export default useResultsBoard

