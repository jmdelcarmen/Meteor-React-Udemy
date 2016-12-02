'use strict';

//Only executed in the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';


Meteor.startup(() => {
  //Great place to generate some data
  const numberRecords = Employees.find({}).count();
  //log number of existing records
  console.log(numberRecords);
  //Check if collection has data before generating
  //See if collection has any records
  if (!numberRecords) {
    //Generate some data
    // function will run 5000 times
    _.times(5000, () => {
      //using ES6 destructuring
      const { name, email, phone } = helpers.createCard();
      Employees.insert({
        //ES6 refactoring
        name, email, phone,
        //generates a url
        avatar: image.avatar()
      });
    });
  }

  //send back only 20 employees
  Meteor.publish('employees', function (per_page) {
    return Employees.find({}, {limit: per_page});
  });
});
