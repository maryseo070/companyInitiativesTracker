import React,{Component}  from 'react';
import PropTypes from 'prop-types';
//create a form under an index of pending companies that on click of each company creates a
//real company

class PendingCompanyForm extends Component {
  constructor(props){
    super(props);
    this.pendingIndex = this.pendingIndex.bind(this);
  }

  componentDidMount() {
    this.props.fetchPendingComps();
  }

  render() {
    let pendings = Object.values(this.props.pendingCompanies).map((comp, i) => {
      return (
        <div key={i}>
          <div>{comp.name}</div>
          <div>{comp.location}</div>
          <div>{comp.website}</div>
          <div>{comp.job_postings}</div>
          <div>{comp.initiative_id}</div>
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
