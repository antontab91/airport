import thunk from 'redux-thunk'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { flightsReducer } from './components/flights/flights.reducer'

const reducer = combineReducers({
  tasks: flightsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
)
