import {combineReducers} from 'redux';
import companyReducer from './company_reducer';

const entitiesReducer = combineReducers({
  companies: companyReducer,
});

export default entitiesReducer;
