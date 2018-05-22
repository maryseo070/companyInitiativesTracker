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

  pendingIndex() {
    // let pendings = this.props.pendingCompanies;
    // debugger
  }

  render() {
    debugger
    let pendings = Object.values(this.props.pendingCompanies).map((comp, i) => {
      return (<div key={Math.random() * 500}>HEY YOU</div>);
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
