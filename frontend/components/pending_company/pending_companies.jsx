import React,{Component}  from 'react';
import PropTypes from 'prop-types';
//create a form under an index of pending companies that on click of each company creates a
//real company

class PendingCompanyForm extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPendingComps();
  }

  render() {
    debugger
    let pendings = Object.values(this.props.pendingCompanies).map((comp, i) => {

      return (
        <div key={i} className="pending-comp-object">
          <div>{comp.name}</div>
          <div>{comp.location}</div>
          <div>{comp.website}</div>
          <div>{comp.job_postings}</div>
          <div>{comp.initiative_id}</div>
          <button onClick={this.props.createCompany(comp)}>Approve Company</button>
        </div>
      );
    });

    return (
      <section>
        {pendings}
      </section>
    );
  }
}

PendingCompanyForm.propType = {
  pendingCompanies: PropTypes.object
};

PendingCompanyForm.defaultProps = {
  pendingCompanies: {}
};


export default PendingCompanyForm;
