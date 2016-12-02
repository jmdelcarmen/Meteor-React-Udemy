'use strict';
//Any JS here is automatically invoked

//Import react library
//define react component
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

//create a component
//component should be wrapped in a single element
//classbased component
class App extends Component {
  //automatically called when react component is created
  constructor(props) {
    //parent constructor
      super(props);
      //initialize state object of the App component
      this.state = { images: [] };
  }

  //gets executed before html is rendered
  componentWillMount () {
    //best place to load data
    console.log('hi');
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    //this.setState modifies the state object
    //App is rerendered when the state changes/updated
      .then(data => this.setState({images: data.data.data }))
      .catch(err => console.log(err));
  }
  //render component
  render () {
    console.log(this.state.images);
    return (
      <div>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
};

class Footer extends Component {
  render () {
    return (
      <p className="text-center bg-primary"> 2016 &copy; J.M. del Carmen</p>
    );
  }
};

//wait for the page to load before rendering any react component
Meteor.startup(() => {
  // <App/> creates an instanct of the App component
  //render component to screen
  ReactDOM.render(<App/>, document.getElementById('container'));
  ReactDOM.render(<Footer/>, document.querySelector('footer'));
});
