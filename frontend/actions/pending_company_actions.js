import * as PendingCompApiUtil from '../util/pending_company_api_util.js';

export const RECEIVE_PENDING_COMP = "RECEIVE_PENDING_COMP";
export const RECEIVE_PENDING_COMPS = "RECEIVE_PENDING_COMPS";


export const createPendingComp = company => dispatch => {
  return PendingCompApiUtil.createPendingComp(company).then(
    c => dispatch(receivePendingComp(c)
  ));
};

export const receivePendingComp = company => {
  return {
    type: RECEIVE_PENDING_COMP,
    company
  };
};

export const receivePendingComps = companies => {
  return {
    type: RECEIVE_PENDING_COMPS,
    companies
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
