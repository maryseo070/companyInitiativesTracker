import {fetchCompany} from '../../actions/company_actions.js';
import {connect} from 'react-redux';
import CompanyShow from './company_show';
import {withRouter} from 'react-router-dom';
const msp = state => {
  return {
    company: state.entities.companies.company
  };
};

const mdp = dispatch => {
  return {
    fetchCompany: (id) => dispatch(fetchCompany(id))
  };
};

export default withRouter(connect(msp, mdp)(CompanyShow));
