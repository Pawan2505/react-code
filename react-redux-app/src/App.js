import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Counter from './components/Counter.js';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
