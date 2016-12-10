'use strict';

import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  //automatically called
  componentDidMount() {
    //render the Blaze accounts form
    //find the div rendered in render method
    //place Blaze accounts form in the div
    //this.view
    this.view = Blaze.render(Template.loginButtons,
       ReactDOM.findDOMNode(this.refs.container));
  }

  //called when component is about to be
  //removed from the screen
  componentWillUnmount() {
    //Find the forms we created and destroy them
    // clean up those forms
    Blaze.remove(this.view);
  }

  render() {
    return(
      <div ref="container"></div>
    );
  }
}

export default Accounts;
