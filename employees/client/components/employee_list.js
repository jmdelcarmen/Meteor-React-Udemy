'use strict';

import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
  // props.employees => array of employee objects

  return (
    <div>
      <div className="employee-list">
        {props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee}/>)}
      </div>
    </div>
  );
}

//Container gives access to a publication
//Container watches a subscription and updates component when data changes
export default createContainer(() => {
  //set up subscription
  Meteor.subscribe('employees');
  //return an object.
  // Whatever we return will be sent to
  // EmployeeList as props

  //Fetch only whatever is subscribed
  return { employees: Employees.find({}).fetch() };
  //then stick it into EmployeeList component accessible through the props
}, EmployeeList);
