import React,{Component}  from 'react';
import PropTypes from 'prop-types';


class PendingCompanyForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      pendingCompanies: this.props.pendingCompanies
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPendingComps();
  }

  handleDelete(id) {
    this.props.deletePendingComp(id);
    this.setState({pendingCompanies: this.props.pendingCompanies});
  }

  render() {
    let pendings = Object.values(this.props.pendingCompanies).map((comp, i) => {
      return (
        <div key={i} className="pending-comp-object">
          <div>{comp.name}</div>
          <div>{comp.location}</div>
          <div>{comp.website}</div>
          <div>{comp.job_postings}</div>
          <div>{comp.initiative_id}</div>
          <button
            onClick={ () => this.props.createCompany(comp)}
            >Approve Company</button>
          <button
            onClick={ () => this.handleDelete(comp.id) }
            >Delete</button>
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
