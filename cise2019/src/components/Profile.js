import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div className="profileContainer">
        <h1>Profile</h1>
        <form>
          <div className="profileFirstName">
          <label htmlFor="profileFirstNameLabel">First Name</label>
          <h3>{window.globalFirstName}</h3>
          <br></br>
          <label htmlFor="profileLastNameLabel">Last Name</label>
          <h3>{window.globalLastName}</h3>
          <br></br>
          <label htmlFor="profileLastNameLabel">Email</label>
          <h3>{window.globalEmail}</h3>
          <br></br>
          <label htmlFor="profileLastNameLabel">Password</label>
          {/* <h3 type>{DefaultSring}</h3> */}
          <h3 type="password">{window.globalPassword}</h3>
          </div>
        </form>
      </div>
    );
  }
}