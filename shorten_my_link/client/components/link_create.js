'use strict';

import React, { Component } from 'react';

class LinkCreate extends Component {

  handleSubmit (event) {
    event.preventDefault();
    //get access to value in the form
    //using the refs system
    //getting the value of the input with theh ref of longUrl
    //similar to the name property in input elements
    console.log(this.refs.longUrl.value);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to Shorten</label>
          <input ref="longUrl" type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">Shorten !</button>
      </form>
    );
  }
};

export default LinkCreate;
