'use strict';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

//class-based components we get access to the props through //this.props
class EmployeeList extends Component {
  componentWillMount() {
    //gets run before component is returned
    //this refers to the EmployeeList component
    this.page = 1;
  }
  //bind this event to the click handler on the button
  handleButtonClick () {
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1 ));
    this.page++;
  }

  render () {
    const { employees } = this.props;
    // props.employees => array of employee objects
    //by calling the Meteor.subscribe method again, we are
    // updating the subscription
    return (
      <div>
        <div className="employee-list">
          {employees.map(employee => <EmployeeDetail key={employee._id} employee={employee}/>)}
        </div>
        <button onClick={this.handleButtonClick.bind(this)} className="btn btn-block btn-primary">Load More ...</button>
      </div>
    );
  }
};

//Container gives access to a publication
//Container watches a subscription and updates component when data changes
export default createContainer(() => {
  //set up subscription
  //component rerenders when the subscription gets updated
  Meteor.subscribe('employees', PER_PAGE);
  //return an object.
  // Whatever we return will be sent to
  // EmployeeList as props
  //Fetch only whatever is subscribed
  return { employees: Employees.find({}).fetch() };
  //then stick it into EmployeeList component accessible through the props
}, EmployeeList);
