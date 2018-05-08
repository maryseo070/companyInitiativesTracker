import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class CompanyForm extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initiativesDropdown = this.initiativesDropdown.bind(this);
  }

  handleSubmit(){

  }

  initiativesDropdown() {
    let inits = Object.values(this.props.initiatives);
    return inits.map( (init) => (
        <option value={init.category}>{init.category}</option>
    ));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Location(City and State)"/>
        <select>
          {this.initiativesDropdown()}
        </select>
        <div>Description of company/initiative</div>
        <textarea />
        <input type="text" placeholder="Link to company website" />
        <input type="text" placeholder="Link to company job postings" />
        <input
          type="submit"
          value="Submit Company"
          onClick={() => console.log("boop")} />
      </form>
    );
  }
}

CompanyForm.propType = {
  initiatives: PropTypes.object
};

CompanyForm.defaultProps = {
  initiatives: {}
};


export default CompanyForm;
