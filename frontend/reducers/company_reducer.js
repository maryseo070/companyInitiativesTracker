import {
  RECEIVE_COMPANIES,
  RECEIVE_COMPANY,
  RECEIVE_INITIATIVES
} from '../actions/company_actions.js';
import {merge} from 'lodash';

const companyReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMPANIES:
      return merge({}, state, action.companies);
    case RECEIVE_COMPANY:
      return merge({}, state, action.company);
    case RECEIVE_INITIATIVES:
      return merge({}, state, action.initiatives);
    default:
      return state;
  }
};

export default companyReducer;
