import {
  createCompany,
  fetchInitiatives
} from '../../actions/company_actions';
import {connect} from 'react-redux';
import CompanyForm from './company_form';
import {withRouter} from 'react-router-dom';


const msp = (state) => {
  return {
    initiatives: state.entities.companies.initiatives
  };
};

const mdp = dispatch => {
  return {
    createCompany: (company) => dispatch(createCompany(company)),
    fetchInitiatives: () => dispatch(fetchInitiatives())
  };
};

export default withRouter(connect(msp, mdp)(CompanyForm));
