import React, {Component} from 'react';
import CompanyShowContainer from './company_show_container';
import CompanyIndexContainer from './company_index_container';


class ShowIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchCompany();
    this.props.fetchCompanies();
  }
  render() {
    return(
      <div className="show-index">
        <CompanyIndexContainer
          className="company-index-item"
          companies={this.props.companies}>
        </CompanyIndexContainer>
        <CompanyShowContainer
          className="company-show-item"
          company={this.props.company}>
        </CompanyShowContainer>
        <div>buttons and stuff</div>
      </div>
    );
  }
}

export default ShowIndex;
