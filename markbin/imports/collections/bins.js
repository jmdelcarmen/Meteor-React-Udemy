'use strict';

import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },

  'bins.remove': function(bin) {
    return Bins.remove(bin);
  },

  'bins.update': function (bin, content) {
    //content using ES6 convention
    return Bins.update(bin._id, { $set: { content } });
  },

  'bins.share': function (bin, email) {
    return Bins.update(bin._id, { $push: { sharedWith: email } });
  }


});

export const Bins = new Mongo.Collection('bin');
