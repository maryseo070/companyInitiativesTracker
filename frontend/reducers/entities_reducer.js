import {combineReducers} from 'redux';
import companyReducer from './company_reducer';
import pendingCompanyReducer from './pending_company_reducer';

const entitiesReducer = combineReducers({
  companies: companyReducer,
  pendingCompanies: pendingCompanyReducer
});

export default entitiesReducer;
