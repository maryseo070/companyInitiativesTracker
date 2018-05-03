import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CompanyShowContainer from './company_show_container';
import CompanyIndexContainer from './company_index_container';
import InitiativeButtonsContainer
from './initiatives/initiative_buttons_container';


class ShowIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initId: 0
    };
    this.initiativeButtons = this.initiativeButtons.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return (e) => (
      this.setState({initId: e.target.value})
    );
  }

  initiativeButtons(){
    let initiatives = this.props.initiatives;
    initiatives = Object.values(initiatives);
    return initiatives.map( (i, key) => (
      <button
        key={key}
        onClick={this.handleClick()} value={i.id} >{i.category}</button>
    ));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.companyId
      !== nextProps.match.params.companyId) {
      this.props.fetchCompany(nextProps.match.params.companyId);
    }
  }

  componentDidMount () {
    this.props.fetchCompany();
    this.props.fetchInitiatives();
  }
  render() {
    // debugger
    return(
      <div className="show-index">
        <CompanyIndexContainer
          className="company-index"
          companies={this.props.companies} initFilter={this.state.initId}>
        </CompanyIndexContainer>
        <CompanyShowContainer
          className="company-show-item"
          company={this.props.company}>
        </CompanyShowContainer>
        <section>
          {this.initiativeButtons()}
        </section>
      </div>
    );
  }
}

ShowIndex.propTypes = {
  initiatives: PropTypes.object,
  company: PropTypes.object,
  companies: PropTypes.object
};

ShowIndex.defaultProps = {
  initiatives: {},
  company: {},
  companies: {}
};

export default ShowIndex;
