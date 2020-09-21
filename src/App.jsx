import { Provider } from 'react-redux';
import React from 'react';
import Main from './components/Main.jsx';
import { store } from './store';


const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>

  )
}
export default App;