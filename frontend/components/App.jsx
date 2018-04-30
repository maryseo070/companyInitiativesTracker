import React from 'react';
import { Route } from 'react-router';
import CompanyShowContainer from './company_show/company_show_container.js';
// import{MainPage} from './main_page/main_page';
import ShowIndexContainer from './company_show/show_index_container';

const App = () => {
  return (
    <div>
      <Route exact path="/companies/:companyId" component={ShowIndexContainer} />
    </div>
  );
};

// <Route exact path="/companies" component={CompanyIndexContainer} />
export default App;
