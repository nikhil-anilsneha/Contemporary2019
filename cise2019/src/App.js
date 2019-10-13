import React, {Component} from 'react';
import './App.css';
import banner from "./components/images/banner.jpg";
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
        <div className="maindiv">
          <a href="/HomePage.js"><img src={banner} alt="banner" className="banner img-responsive"></img></a>
          <NavBar></NavBar>
        </div>
    );
  }
}

export default App;
