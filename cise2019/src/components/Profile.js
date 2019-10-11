import React, { Component } from 'react';

//Display user details after successful login
export default class Profile extends Component {
  render() {
    return (
      <div className="profileContainer">
        <h1>Profile</h1>
        <form>
          <div className="profileName">
          <h3>First Name: {window.globalFirstName}</h3>
          <br></br>
          <h3>Last Name: {window.globalLastName}</h3>
          <br></br>
          <h3>Email: {window.globalEmail}</h3>
          <br></br>
          </div>
        </form>
      </div>
    );
  }
}