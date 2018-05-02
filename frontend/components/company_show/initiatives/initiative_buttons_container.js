import {fetchInitiatives} from '../../../actions/company_actions.js';
import {connect} from 'react-redux';
import InitiativeButtons from './initiative_buttons.jsx';
import {withRouter} from 'react-router-dom';


const msp = state => {
  return {
    initiatives: state.entities.companies.initiatives,
    companies: state.entities.companies.companies
  };
};

const mdp = dispatch => {
  return {
    fetchInitiatives: () => dispatch(fetchInitiatives())
  };
};

export default withRouter(connect(msp, mdp)(InitiativeButtons));
