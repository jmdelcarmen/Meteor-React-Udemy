'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>Hello There</div>
  );
}



//wait for meteor to load in the browser
Meteor.startup(() => {
  //React render call
  ReactDOM.render(<App/>, document.querySelector('.container'));
});
