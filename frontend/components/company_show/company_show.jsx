import React, {Component} from 'react';
import PropTypes from 'prop-types';

const CompanyShowItem = (company) => {
  return (
    <ul>
      <li>{company.name}</li>
      <li>{company.location}</li>
      <li>{company.description}</li>
      <li>{company.website}</li>
      <li>{company.job_postings}</li>
      <li>enter initiative when ready</li>
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
      <CompanyShowItem {...company}></CompanyShowItem>
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
