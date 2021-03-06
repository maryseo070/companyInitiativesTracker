import * as CompanyApiUtil from '../util/company_api_util.js';

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const RECEIVE_INITIATIVES = "RECEIVE_INITIATIVES";


export const createCompany = (company) => dispatch => {
  return CompanyApiUtil.createCompany(company).then(
    (c) => dispatch(receiveCompany(c))
  );
};

export const fetchInitiatives = () => dispatch => {
  return CompanyApiUtil.fetchInitiatives().then(
    initiatives => dispatch(receiveInitiatives(initiatives))
  );
};

export const receiveInitiatives = initiatives => {
  return {
    type: RECEIVE_INITIATIVES,
    initiatives
  };
};

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
