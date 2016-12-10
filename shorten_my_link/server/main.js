'use strict';

import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function () {
    return Links.find({});
  });
});

// Executed when user visits with a route like
//localhost:3000/abcd
function onRoute (req, res, next) {
  //take the token from the url
  //search th link collection
  const link = Links.findOne({token: req.params.token});
  //if link found , redirect to long url
  if (link) {
    Links.update(link, {$inc: {clicks: 1}});
    res.writeHead(307, {'Location': link.url});
    res.end();
    //if not, send user to normal react app
  } else {
    res.writeHead(307, {'Location': 'http://localhost:3000'});
    res.end();
  }
  next();
}

const middleware = ConnectRoute(function (router) {
  router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
