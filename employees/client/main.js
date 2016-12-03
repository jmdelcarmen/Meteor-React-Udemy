'use strict';

import React from 'react';
import { render } from 'react-dom';
import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <div>
      <EmployeeList/>
    </div>
  );
}

//wait for meteor to load in the browser
Meteor.startup(() => {
  //React render call
  render(<App/>, document.querySelector('.container'));
});
