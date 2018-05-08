import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class CompanyForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      location: "",
      description: "",
      initiative_id: null,
      website: "",
      job_postings: ""

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initiativesDropdown = this.initiativesDropdown.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateInit = this.updateInit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createCompany(this.state).then(
      () => this.props.history.push(`/companies/1`)
    );
  }

  updateField(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateInit() {
    return(e) => {
      this.setState({"initiative_id": e.target.idNum});
    };
  }

  initiativesDropdown() {
    let inits = Object.values(this.props.initiatives);
    return inits.map( (init) => (
        <option
          value={init.category}
          idNum={init.id}>
          {init.category}</option>
    ));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Company Name"
          onChange={this.updateField("name")}/>
        <input type="text"
          placeholder="Location(City and State)"
          onChange={this.updateField("location")}/>
        <select onChange={this.updateInit()}>
          {this.initiativesDropdown()}
        </select>
        <div>Description of company/initiative</div>
        <textarea onChange={this.updateField("description")}/>
        <input type="text"
          placeholder="Link to company website"
          onChange={this.updateField("website")}/>
        <input
          type="text"
          placeholder="Link to company job postings"
          onChange={this.updateField("job_postings")}/>
        <input
          type="submit"
          value="Submit Company"/>
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
