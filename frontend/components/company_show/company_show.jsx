import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CompanyIndexContainer from './company_index_container';

export const CompanyShowItem = (company) => {
  return (
    <ul className="company-show-ul">
      <li className="company-show-li">{company.name}</li>
      <li className="company-show-li">{company.location}</li>
      <li className="company-show-li">{company.description}</li>
      <a className="company-show-li"
        href={`${company.website}`}>
        {company.name} Website
      </a>
      <br></br>
      <a className="company-show-li"
        href={`${company.job_postings}`}>
        {company.name} Job Postings
      </a>
      <li className="company-show-li">{company.initiative}</li>
    </ul>
  );
};


class CompanyShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCompany(this.props.match.params.companyId);
  }

  render() {
    let company = this.props.company;

    return(
      <CompanyShowItem className="company-show-item"
        {...company}>
      </CompanyShowItem>
    );
  }
}



CompanyShow.propType = {
  company: PropTypes.object
};

CompanyShow.defaultProps = {
  company: {}
};

export default CompanyShow;
