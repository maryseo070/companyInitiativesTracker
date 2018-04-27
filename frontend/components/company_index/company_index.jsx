import React from 'react';


const CompanyInfo = (company) => {
  return (
    <div>
      <p>{company.name}</p>
      <p>{company.location}</p>
      <p>{company.description}</p>
      <p>{company.website}</p>
      <p>{company.job_postings}</p>
      <p>{company.size}</p>
    </div>
  );
};

class CompanyIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchCompanies();
  }

  render () {
    let companies = this.props.companies.companies;
    let name;
    if (companies) {
      companies = Object.values(companies);
      companies = companies.map(company => (
        <CompanyInfo key={Math.random() * 5000} {...company} />
      ));
    }

    return (
      <section key={Math.random() * 5000}>
        {companies}
      </section>
    );
  }
}

export default CompanyIndex;
