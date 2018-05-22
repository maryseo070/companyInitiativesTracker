import {fetchPendingComps} from '../../actions/pending_company_actions';
import {createCompany} from '../../actions/company_actions';
import PendingCompanyForm from './pending_companies.jsx';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const msp = state => {
  return {
    pendingCompanies: state.entities.pendingCompanies
  };
};

const mdp = dispatch => {
  return {
    fetchPendingComps: () => dispatch(fetchPendingComps()),
    createCompany: (company) => dispatch(createCompany(company))
  };
};

export default withRouter(connect(msp, mdp)(PendingCompanyForm));
