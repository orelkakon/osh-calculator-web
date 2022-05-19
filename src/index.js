import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { myDayList } from './reducers/index'
import { actionAddItem } from './actions/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(myDayList);

store.dispatch(actionAddItem(
  "AAAAA", 20, 10, 5, 100, 200
))

store.dispatch(actionAddItem(
  "BBBBB", 10, 40, 15, 150, 300
))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
