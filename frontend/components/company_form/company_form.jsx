import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class CompanyForm extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <form>
        <input type="text"></input>
        <input type="submit" value="Submit Company" onClick={() => console.log("boop")}></input>
      </form>
    );
  }
}


export default CompanyForm;
