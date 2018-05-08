import {
  createCompany,
  fetchInitiatives
} from '../../actions/company_actions';
import {connect} from 'react-redux';
import CompanyForm from './company_form';

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

export default connect(msp, mdp)(CompanyForm);
