'use strict';

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  //Add Resolution
  'resolutions.insert': function (text) {
    if (!Meteor.userId()) {
     throw new Meteor.Error('Not Authorized');
    }
    return Resolutions.insert({
      text,
      complete: false,
      user: Meteor.userId(),
      createdAt: new Date()
    });
  },

  'toggle.resolution': function ({ _id, complete, user}) {
    if (Meteor.userId() !== user) {
     throw new Meteor.Error('Not Authorized');
    }
    return Resolutions.update(_id, { $set: { complete: !complete } });
  },

  'delete.resolution': function ({ _id, user}) {
    if (Meteor.userId() !== user) {
     throw new Meteor.Error('Not Authorized');
    }
    return Resolutions.remove(_id);
  }

});


export const Resolutions = new Mongo.Collection('resolutions');
