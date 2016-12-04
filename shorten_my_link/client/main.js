'use strict';
//Deps
import React from 'react';
import { render } from 'react-dom';
//Components
import Header from './components/header';
import LinkCreate from './components/link_create';

const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
    </div>
  );
};


Meteor.startup(() => {
  render(<App />, document.querySelector('.render-target'));
})
