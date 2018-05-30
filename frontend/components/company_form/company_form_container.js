import {
  createPendingComp
} from '../../actions/pending_company_actions';
import { fetchInitiatives } from '../../actions/company_actions';
import { connect } from 'react-redux';
import CompanyForm from './company_form';
import { withRouter } from 'react-router-dom';


const msp = (state) => {
  return {
    initiatives: state.entities.companies.initiatives,
    pendingCompanies: state.entities.pendingCompanies
  };
};

const mdp = dispatch => {
  return {
    createPendingComp: (company) => dispatch(createPendingComp(company)),
    fetchInitiatives: () => dispatch(fetchInitiatives())
  };
};

export default withRouter(connect(msp, mdp)(CompanyForm));
