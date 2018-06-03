import {
  RECEIVE_PENDING_COMP,
  RECEIVE_PENDING_COMPS
} from '../actions/pending_company_actions';

import {merge} from 'lodash';

const pendingCompanyReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PENDING_COMP:
      return merge({}, state, action.pendingCompany);
    case RECEIVE_PENDING_COMPS:
      return merge({}, state, action.pendingCompanies);
    default:
      return state;
  }
};

export default pendingCompanyReducer;
