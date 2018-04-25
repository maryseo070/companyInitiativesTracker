import * as CompanyApiUtil from '../util/company_api_util.js';

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";


export const fetchCompanies = () => dispatch => {
  return CompanyApiUtil.fetchCompanies().then(
    companies => dispatch(receiveCompanies(companies))
  );
};

export const receiveCompanies = (companies) => {
  return{
    type: RECEIVE_COMPANIES,
    companies
  };
};
