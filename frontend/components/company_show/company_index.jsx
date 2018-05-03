import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { selectChildCompanies } from '../../reducers/selectors.js';

export const CompanyInfo = (company) => {

  return (
    <ol className="company-info-ol">
      <Link to={`/companies/${company.id}`} className="company-info-li">{company.name}</Link>
      <li className="company-info-li">{company.location}</li>
    </ol>
  );
};

// <a href={`/companies/${company.id}`} className="company-info-li">{company.name}</a>
export const FormLink = () => {
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
    let companies = selectChildCompanies(this.props.companies, this.props.initFilter);
    let indexforKey = 1;
    companies = Object.values(companies);
    companies = companies.map(company => (
      <CompanyInfo key={indexforKey++} {...company} >
      </CompanyInfo>
    ));

    return (
      <section className="company-index-section">
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
