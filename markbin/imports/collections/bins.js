'use strict';

import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function() {
    console.log(this.userId);
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },

  'bins.remove': function(bin) {
    console.log('Bin removed');
    return Bins.remove(bin);
  }
});

export const Bins = new Mongo.Collection('bin');
