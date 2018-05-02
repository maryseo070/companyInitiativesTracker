import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InitiativeButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comps: []
    };
    this.fetchRelatedCompanies = this.fetchRelatedCompanies.bind(this);
  }

  componentDidMount() {
    this.props.fetchInitiatives();
    // console.log(this.props);
  }

  fetchRelatedCompanies(initId) {
    let childCompanies = Object.values(this.props.companies);
    childCompanies = childCompanies.filter(
        company => company.initiative_id === initId
      );
    // this.setState({comps: childCompanies});
    console.log(childCompanies);
  }

  render () {
    let initiatives = this.props.initiatives;
    initiatives = Object.values(initiatives);
    initiatives = initiatives.map((i, key) => (
      <button
        key={key}
        onClick={() => this.fetchRelatedCompanies(i.id)}>{i.category}</button>
    ));
    return(
      <section>
        {initiatives}
      </section>
    );
  }
}

InitiativeButtons.propTypes = {
  initiatives: PropTypes.object,
  companies: PropTypes.object
};

InitiativeButtons.defaultProps = {
  initiatives: {},
  companies: {}
};

export default InitiativeButtons;
