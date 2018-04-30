import {fetchCompany, fetchCompanies} from '../../actions/company_actions.js';
import {connect} from 'react-redux';
import ShowIndex from './show_index';
import {withRouter} from 'react-router-dom';

const msp = state => {
  return {
    company: state.entities.companies.company,
    companies: state.entities.companies.companies
  };
};

const mdp = dispatch => {
  return {
    fetchCompany: (id) => dispatch(fetchCompany(id)),
    fetchCompanies: () => dispatch(fetchCompanies())
  };
};

export default withRouter(connect(msp, mdp)(ShowIndex));
