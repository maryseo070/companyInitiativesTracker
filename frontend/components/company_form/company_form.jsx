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
      initiative_id: "",
      website: "",
      job_postings: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initiativesDropdown = this.initiativesDropdown.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateInit = this.updateInit.bind(this);
    this.updateName = this.updateName.bind(this);
  }
  // componentDidMount() {
  //   console.log(this.state)
  // }

  handleSubmit(e){
    e.preventDefault();
    let company = Object.assign({}, this.state);
    this.props.createCompany(company).then(
      () => this.props.history.push(`/companies/1`)
    );
  }

  updateField(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateName(e){
    this.setState({name: e.currentTarget.value});
  }
  updateInit() {
    return(e) => {
      this.setState({"initiative_id": e.target.value});
    };
  }

  initiativesDropdown() {
    let inits = Object.values(this.props.initiatives);
    return inits.map( (init, i) => (
        <option
          key={Math.random() * 5000}
          value={init.id}>
          {init.category}</option>
    ));
  }

  render() {
    let i = 1;
    return (
      <section className="company-form-holder">
        Want to add a company to the initiative list? Submit form!
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            key={i++}
            placeholder="Company Name"
            value={this.state.name}
            onChange={this.updateName}/>
          <input type="text"
            placeholder="Location(City and State)"
            value={this.state.location}
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
      </section>
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
