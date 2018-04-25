import {RECEIVE_COMPANIES} from '../actions/company_actions.js';
import {merge} from 'lodash';

const companyReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMPANIES:
      return action.companies;
    default:
      return state;
  }
};

export default companyReducer;
