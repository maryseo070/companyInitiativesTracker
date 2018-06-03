import * as PendingCompApiUtil from '../util/pending_company_api_util.js';

export const RECEIVE_PENDING_COMP = "RECEIVE_PENDING_COMP";
export const RECEIVE_PENDING_COMPS = "RECEIVE_PENDING_COMPS";

export const deletePendingComp = id => dispatch => {
  return PendingCompApiUtil.deletePendingComp(id);
};

export const createPendingComp = company => dispatch => {
  return PendingCompApiUtil.createPendingComp(company).then(
    c => dispatch(receivePendingComp(c)
  ));
};

export const receivePendingComp = pendingCompany => {
  return {
    type: RECEIVE_PENDING_COMP,
    pendingCompany
  };
};

export const receivePendingComps = pendingCompanies => {
  return {
    type: RECEIVE_PENDING_COMPS,
    pendingCompanies
  };
};

export const fetchPendingComp = id => dispatch => {
  return PendingCompApiUtil.fetchPendingComp(id).then(
    company => dispatch(receivePendingComp(company))
  );
};

export const fetchPendingComps = () => dispatch => {
  return PendingCompApiUtil.fetchPendingComps().then(
    companies => dispatch(receivePendingComps(companies))
  );
};
