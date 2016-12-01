//Any JS here is automatically invoked

//Import react library
import React from 'react';
import ReactDOM from 'react-dom';

//create a component
//functional component
//component should be wrapped in a single element
const App = () => {
  return (
    <div>
      <h1>React App</h1>
    </div>
  );
};

//wait for the page to load before rendering any react component
Meteor.startup(() => {
  // <App/> creates an instanct of the App component
  ReactDOM.render(<App/>, document.getElementById('container'));
});



//render component to screen
