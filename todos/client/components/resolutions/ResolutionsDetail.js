'use strict';

import React, { Component } from 'react';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';
import { Resolutions } from '../../../imports/collections/resolutions';

class ResolutionsDetail extends Component {

  render() {
    console.log(this.props.id);
    return(
      <div>
        <h1>{this.props.res.text}</h1>
      </div>
    );
  }
}

export default createContainer((props) => {
  Meteor.subscribe('resolutions');

  return { res: Resolutions.findOne(props.id) };
}, ResolutionsDetail);
