import React, { Component } from 'react';
import './App.css';
import banner from "./components/images/banner.jpg";
import NavBar from './components/NavBar';

//shows the components that are the same one every page
class App extends Component {
  render() {
    return (
      <div className="maindiv">
        {/* show banner */}
        <img src={banner} alt="banner" className="banner img-responsive"></img>
        {/* show navbar */}
        <NavBar></NavBar>
      </div>
    );
  }
}

export default App;
