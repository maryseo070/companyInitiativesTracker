import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router';

const CompanyInfo = (company) => {
  return (
    <ul className="company-info-ul">
      <li className="company-info-li">{company.name}</li>
      <li className="company-info-li">{company.location}</li>
    </ul>
  );
};

const FormLink = () => {
  return (
    <div>
      insert link to form for company after you create a component for that :)
    </div>
  );
};
// <Link to={`/`}>Add a company to the database!</Link>

class CompanyIndex extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchCompanies();
  }
  render () {
    let companies = this.props.companies;
    let indexforKey = 1;
    companies = Object.values(companies);
    companies = companies.map(company => (
      <CompanyInfo key={indexforKey++} {...company} >
      </CompanyInfo>
    ));

    return (
      <section>
        {companies}
        <FormLink></FormLink>
      </section>
    );
  }
}

CompanyIndex.propTypes = {
  companies: PropTypes.object
};

CompanyIndex.defaultProps = {
  companies: {}
};

export default CompanyIndex;
