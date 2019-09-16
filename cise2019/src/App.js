<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World <code>src/App.js</code> IS THIS WORKING???!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          why are you being difficult bitch
        </a>
      </header>
    </div>
  );
=======
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
>>>>>>> 5646403ca19074058c7f4655d669b44272bfd89c
}

export default App;
