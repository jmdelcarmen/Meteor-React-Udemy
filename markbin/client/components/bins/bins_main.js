'use strict';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

class BinsMain extends Component {
  render() {
    if (!this.props.bin) {
      return <div>Loading . . .</div>
    }
    // returned value from bins subscription
    // console.log(this.props.bin);
    return (
      <div>
        <BinsEditor bin={this.props.bin} />
        <BinsViewer bin={this.props.bin} />
        <BinsShare bin={this.props.bin} />
      </div>
    );
  }
}


export default createContainer((props) => {
  const { binId } = props.params;

  Meteor.subscribe('sharedBins');
  Meteor.subscribe('bins');

  return {bin: Bins.findOne(binId) };

}, BinsMain);
