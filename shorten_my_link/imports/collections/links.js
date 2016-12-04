'use strict';
  //in order to use this file, we need to import it in both the client and server main.js
import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check'

Meteor.methods({
  //valid JS
  // method name = links.insert
  'links.insert': function (url) {
    //validation should occur here
    //Match.Where is used for custom validation
    check(url, Match.Where(url => validUrl.isUri(url)))

    //Ready to save the url
    //generate a token for the url
    const token = Math.random().toString(36).slice(-5);

    //condense key:value pairs through ES6
    Links.insert({
      url,
      token,
      clicks: 0
    });
  }
});

export const Links = new Mongo.Collection('links');
