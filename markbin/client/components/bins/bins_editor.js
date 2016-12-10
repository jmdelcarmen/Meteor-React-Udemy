'use strict';

import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {

  onEditorChange(content) {
    // content gets passed on to this method
    //then passed down to the content in the meteor method call
    //this.props.bin passes the bin
    Meteor.call('bins.update', this.props.bin, content);

    //un comment to see the onChange handler
    // console.log(content);
  }

  render() {
    return(
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bin.content}
          onChange={this.onEditorChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }}/>
      </div>
    )
  }
}

export default BinsEditor;
