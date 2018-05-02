import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchCompanies } from './actions/company_actions.js';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  store = configureStore();

  window.fetchCompanies = fetchCompanies;
  window.getState = store.getState;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
