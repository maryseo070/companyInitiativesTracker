import React, {Component} from 'react';
import CompanyShowContainer from './company_show_container';
import CompanyIndexContainer from './company_index_container';
import InitiativeButtonsContainer from './initiatives/initiative_buttons_container';

class ShowIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.companyId
      !== nextProps.match.params.companyId) {
      this.props.fetchCompany(nextProps.match.params.companyId);
      // this.props.fetchCompanies();
    }
  }

  componentDidMount () {
    this.props.fetchCompany();
    this.props.fetchCompanies();
  }
  render() {
    // debugger
    return(
      <div className="show-index">
        <CompanyIndexContainer
          className="company-index"
          companies={this.props.companies}>
        </CompanyIndexContainer>
        <CompanyShowContainer
          className="company-show-item"
          company={this.props.company}>
        </CompanyShowContainer>
        <InitiativeButtonsContainer >
        </InitiativeButtonsContainer>
      </div>
    );
  }
}

export default ShowIndex;
