import React from 'react';
import { Route } from 'react-router';
// import CompanyShowContainer from './company_show/company_show_container.js';
import ShowIndexContainer from './company_show/show_index_container';
import PendingCompanyFormContainer
from './pending_company/pending_companies_container';

const App = () => {
  return (
    <div>
      <Route
        exact path="/companies/:companyId"
        component={ShowIndexContainer} />
      <Route
        exact path='/pendingCompanies'
        component={PendingCompanyFormContainer}/>
    </div>
  );
};

export default App;
