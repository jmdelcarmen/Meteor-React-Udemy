'use strict';

import React, { Component } from 'react';

class LinkCreate extends Component {

  constructor(props) {
    super(props)

    this.state = {error: ''};
  }

  handleSubmit (event) {
    event.preventDefault();
    //get access to value in the form
    //using the refs system
    //getting the value of the input with theh ref of longUrl
    //refs is like ng-model
    //similar to the name property in input elements
    //calling a meteor method
    Meteor.call('links.insert', this.refs.longUrl.value, (err) => {
      //error handling woo
      if (err) {
        this.setState({error: 'Enter a valid URL'});
      } else {
        this.setState({error: ''});
      }
    });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to Shorten</label>
          <input ref="longUrl" type="text" className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten !</button>
      </form>
    );
  }
};

export default LinkCreate;
