import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CompanyIndexContainer from './company_index_container';
import CompanyForm from './../company_form/company_form_container';

export const CompanyShowItem = (company) => {
  return (
    <ul className="company-show-section">
      <li className="company-show-li-name">{company.name}</li>
      <li className="company-show-li-location">{company.location}</li>
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
      <li className="company-show-li">Initiative Category: {company.initiative}
      </li>
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
      <section className="company-show-section">
        <CompanyShowItem
          {...company}>
        </CompanyShowItem>
        <CompanyForm intiatives={this.props.initiatives}>
        </CompanyForm>
      </section>
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
