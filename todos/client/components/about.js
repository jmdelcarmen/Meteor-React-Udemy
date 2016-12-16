'use strict';

import React, { Component } from 'react';
import { Session } from 'meteor/session';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return(
      <ReactCSSTransitionGroup
          component="div"
          transitionName="route"
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionAppear={true}
          transitionLeaveTimeout={400}>
          <h1>About Us</h1>
          <p>Readymade vegan celiac, stumptown messenger bag ennui small batch put a bird on it. Microdosing small batch yuccie, pickled air plant kombucha woke bushwick schlitz. Celiac tumblr woke meh chambray. Chambray live-edge lumbersexual enamel pin wayfarers, unicorn irony. Leggings plaid banh mi, beard raclette chia iceland four dollar toast 90's. Literally viral bushwick keytar. Readymade street art PBR&B, bespoke kogi paleo flexitarian freegan pug green juice mumblecore you probably haven't heard of them occupy vice.</p>
          <button onClick={this.setVar}>Sign Up</button>
      </ReactCSSTransitionGroup>
    );
  }
}
