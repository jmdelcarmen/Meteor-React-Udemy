'use strict';

import { Meteor } from 'meteor/meteor';
import { Resolutions } from '../imports/collections/resolutions';


Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('resolutions', () => {
    return Resolutions.find();
  });

  Meteor.publish('userResolutions', (id) => {
    return Resolutions.find({ user: id});
  });

});
