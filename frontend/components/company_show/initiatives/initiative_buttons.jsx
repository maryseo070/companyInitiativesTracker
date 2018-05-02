import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InitiativeButtons extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchInitiatives();
  }

  render () {
    let initiatives = this.props.initiatives;
    initiatives = Object.values(initiatives);
    initiatives = initiatives.map(i => (
      <div>{i.category}</div>
    ))
    return(
      <section>
        {initiatives}
      </section>
    );
  }
}

InitiativeButtons.propTypes = {
  initiatives: PropTypes.object
};

InitiativeButtons.defaultProps = {
  initiatives: {}
};

export default InitiativeButtons;
