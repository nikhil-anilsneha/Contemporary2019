import React, {Component} from 'react';
import './App.css';
import banner from "./components/images/banner.jpg";
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
        <div>
          <img src={banner} alt="banner" className="banner"></img>
          <NavBar></NavBar>
        </div>
    )
  }
}



export default App;
