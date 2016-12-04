'use strict';
//Deps
import React from 'react';
import { render } from 'react-dom';
//Components
import Header from './components/header';
import LinkCreate from './components/link_create';
import { Links } from '../imports/collections/links';
import LinkList from './components/link_list';


const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
      <LinkList />
    </div>
  );
};


Meteor.startup(() => {
  render(<App />, document.querySelector('.render-target'));
});
