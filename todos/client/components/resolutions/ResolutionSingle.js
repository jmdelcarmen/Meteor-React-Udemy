'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ResolutionSingle extends Component {
  toggleChecked() {
    Meteor.call('toggle.resolution', this.props.resolution, (err) => {
      console.log('Updated!');
    });
  }

  deleteResoluton() {
    Meteor.call('delete.resolution', this.props.resolution, (err) => {
      console.log('Removed!');
    });
  }

  render() {
    const resolutionClass = this.props.resolution.complete ? "checked" : "";
    const status = this.props.resolution.complete ? <span className="completed">Completed</span> : '';
    const resPath = this.props.resolution ?  `/resolution/${this.props.resolution._id}` : '';
    return(
      <li className={resolutionClass}>
      <input type="checkbox"
             readOnly={true}
             checked={this.props.resolution.complete}
             onClick={this.toggleChecked.bind(this)} />
             {this.props.resolution.text}
        {status}
        <button className="btn-cancel"
                onClick={this.deleteResoluton.bind(this)}>
            X
        </button>
      </li>
    );
  }
}
