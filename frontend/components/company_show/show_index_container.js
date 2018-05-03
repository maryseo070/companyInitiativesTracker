import {
  fetchCompany,
  fetchCompanies,
  fetchInitiatives
} from '../../actions/company_actions.js';
import {connect} from 'react-redux';
import ShowIndex from './show_index';
import {withRouter} from 'react-router-dom';

const msp = state => {
  return {
    company: state.entities.companies.company,
    companies: state.entities.companies.companies,
    initiatives: state.entities.companies.initiatives
  };
};

const mdp = dispatch => {
  return {
    fetchCompany: (id) => dispatch(fetchCompany(id)),
    fetchCompanies: () => dispatch(fetchCompanies()),
    fetchInitiatives: () => dispatch(fetchInitiatives())
  };
};

export default withRouter(connect(msp, mdp)(ShowIndex));
