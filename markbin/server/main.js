'use strict';

import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  //bins for the user
  Meteor.publish('bins', function () {
    return Bins.find({ownerId: this.userId});
  });

  Meteor.publish('sharedBins', function () {
    const user = Meteor.users.findOne(this.userId);
    const email = user.emails[0].address;
    if (!user) { return; }
    return Bins.find({
      //find element in sharedWith array that
      // $eq (matches) the email[0] of the user
      sharedWith: { $elemMatch: { $eq: email } }
    });
  });

});
