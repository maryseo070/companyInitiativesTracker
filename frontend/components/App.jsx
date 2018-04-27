import React from 'react';
import { Route } from 'react-router';
import CompanyIndexConatiner from './company_index/company_index_container';
import CompanyShowContainer from './company_show/company_show_container.js';

const App = () => {
  return (
    <div>
      <Route exact path="/companies" component={CompanyIndexConatiner} />
      <Route exact path="/companies/:companyId" component={CompanyShowContainer} />
    </div>
  );
};

export default App;
