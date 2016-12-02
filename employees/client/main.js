'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
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
  ReactDOM.render(<App/>, document.querySelector('.container'));
});
