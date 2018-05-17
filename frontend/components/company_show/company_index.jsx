import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { selectChildCompanies } from '../../reducers/selectors.js';

export const CompanyInfo = (company) => {

  return (
    <section className="company-info-holder">
      <Link to={`/companies/${company.id}`}
        className="company-info-link">{company.name} <br></br> {company.location}
      </Link>
    </section>
  );
};

// let col = [
//   "#9400D3", "#4B0082", "#0000FF", "#006400", "#FF7F00", "#B22222"
// ];
//
// $(".company-info-li").css(
//   "background-color", col[Math.floor(Math.random() * 6)]
// );

class CompanyIndex extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchCompanies();
  }
  render () {
    let colores = [
      "#800040", "#6239bd", "#9370DB", "#BA55D3", "#800080"
    ];
    $(".company-index-section").css(
      "background-color", colores[Math.floor(Math.random() * 5)]
    )
    let companies = selectChildCompanies(
      this.props.companies, this.props.initFilter
    );
    let indexforKey = 1;
    companies = Object.values(companies);
    companies = companies.map(company => (
      <CompanyInfo key={indexforKey++} {...company} >
      </CompanyInfo>
    ));

    return (
      <section className="company-index-section">
        {companies}
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
