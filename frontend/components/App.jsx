import React from 'react';
import { Route } from 'react-router';
import CompanyIndexConatiner from './company_index/company_index_container';

const App = () => {
  return (
    <div>
      <Route exact path="/companies" component={CompanyIndexConatiner} />
    </div>
  );
};

export default App;
