import React from 'react';

class CompanyIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchCompanies();
  }

  render () {
    debugger
    let companies = this.props.companies.companies;
    let name;
    if (companies) {
      companies = Object.values(companies);
      companies = companies.map(company => (
        <div>
          <p>{company.name}</p>
          <p>{company.location}</p>
          <p>{company.description}</p>
          <p>{company.website}</p>
          <p>{company.job_postings}</p>
          <p>{company.size}</p>
        </div>

      ))
    }

    return (
      <div>{companies}</div>
    );
  }
}

export default CompanyIndex;
