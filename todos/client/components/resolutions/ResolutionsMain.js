'use strict';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Resolutions } from '../../../imports/collections/resolutions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ResolutionsForm from './ResolutionsForm';
import ResolutionSingle from './ResolutionSingle';


class ResolutionsMain extends Component {
  render() {
    const resolutions = this.props.resolutions.reverse().map(res => <ResolutionSingle key={res._id} resolution={res}/>);
    return (
      <ReactCSSTransitionGroup
          component="div"
          transitionName="route"
          transitionEnterTimeout={600}
          transitionAppearTimeout={600}
          transitionAppear={true}
          transitionLeaveTimeout={400}>
        <h1>My Resolutions</h1>
          <ResolutionsForm />
        <ReactCSSTransitionGroup
            component="ul"
            className="resolutions"
            transitionName="resolutionLoad"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={400}>
          {resolutions}
        </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
    );
  }
}

export default createContainer(() => {

  Meteor.subscribe('userResolutions', Meteor.userId());

  return { resolutions: Resolutions.find().fetch() };

}, ResolutionsMain);
