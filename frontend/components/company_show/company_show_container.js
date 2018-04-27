import {fetchCompany} from '../../actions/company_actions.js';
import {connect} from 'react-redux';
import CompanyShow from './company_show';

const msp = state => {
  return {
    company: state.entities.companies.company
  };
};

const mdp = dispatch => {
  return {
    fetchCompany: (id) => dispatch(fetchCompany())
  };
};

export default connect(msp, mdp)(CompanyShow);
