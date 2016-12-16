'use strict';

import React, { Component } from 'react';

class ResolutionsForm extends Component {

  addResolution(event) {
    event.preventDefault();
    const text = this.refs.resolution.value.trim();
    if (text) {
      Meteor.call('resolutions.insert', text, (err, id) => {
        if (err) {
          Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
        } else {
          this.refs.resolution.value = '';
        }
      });
    } else {
      Bert.alert('Enter a resolution', 'danger', 'fixed-top', 'fa-frown-o');
    }
  }

  render() {
    console.log(Meteor.settings.public.text);
    return(
      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
        <input
            type="text"
            ref="resolution"
            placeholder="Finish React Meteor Series" />
      </form>
    );
  }
}

export default ResolutionsForm;
