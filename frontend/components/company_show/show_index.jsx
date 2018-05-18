import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CompanyShowContainer from './company_show_container';
import CompanyIndexContainer from './company_index_container';

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
    let colors = [
      "#9400D3", "#4B0082", "#0000FF", "#006400", "#FF7F00", "#B22222"
    ];

    $(".initiative-button").css(
      "background-color", colors[Math.floor(Math.random() * 6)]
    );

    return initiatives.map( (i, key) => (
      <button
        key={key}
        className="initiative-button"
        onClick={this.handleClick()}
        value={i.id} >{i.category}</button>
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

    let colors = [
      "#9400D3", "#4B0082", "#0000FF", "#006400", "#FF7F00", "#B22222"
    ];

    $(".initiative-button").css(
      "background-color", colors[Math.floor(Math.random() * 6)]
    );

    return(
      <div className="show-index">
        <CompanyIndexContainer
          companies={this.props.companies} initFilter={this.state.initId}>
        </CompanyIndexContainer>
        <CompanyShowContainer
          company={this.props.company}
          initiatives={this.props.initiatives}>
        </CompanyShowContainer>
        <section className="init-buttons-section">
          Filter by Initiative Category
          <button
            onClick={this.handleClick()}
            className="initiative-button"
            value="0" >all</button>
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
