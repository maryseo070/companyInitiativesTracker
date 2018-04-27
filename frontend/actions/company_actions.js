import * as CompanyApiUtil from '../util/company_api_util.js';

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";


export const fetchCompany = (id) => dispatch => {
  return CompanyApiUtil.fetchCompany(id).then(
    company => dispatch(receiveCompany(company))
  );
};


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

export const receiveCompany = company => {
  return {
    type: RECEIVE_COMPANY,
    company
  };
};
