import {fetchCompanies} from '../../actions/company_actions.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CompanyIndex from './company_index.jsx';

const msp = (state) => {
  return{
    companies: state.entities.companies.companies
  };
};

const mdp = dispatch => {
  return {
    fetchCompanies: () => dispatch(fetchCompanies())
  };
};

export default connect(msp, mdp)(CompanyIndex);
