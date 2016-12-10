'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/app';

Meteor.startup(() => {
  render(<App/>, document.querySelector('.render-target'));
});
