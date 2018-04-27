import {RECEIVE_COMPANIES, RECEIVE_COMPANY} from '../actions/company_actions.js';
import {merge} from 'lodash';

const companyReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMPANIES:
      return action.companies;
    case RECEIVE_COMPANY:
      return action.company;
    default:
      return state;
  }
};

export default companyReducer;
