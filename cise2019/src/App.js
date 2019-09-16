import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Form'>
          <h1>Create Account</h1>
          <form onSubmit ={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input 
              type ="text" 
              className='' 
              placeholder="First Name"
              type="text"
              name="firstName"
              noValidate
              onChange={this.handleChange}/>
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input 
              type ="text" 
              className='' 
              placeholder="Last Name"
              type="text"
              name="lastName"
              noValidate
              onChange={this.handleChange}/>
            </div>
            <div className="email">
              <label htmlFor="firstName">Email</label>
              <input 
              type ="text" 
              className='' 
              placeholder="Email"
              type="text"
              name="email"
              noValidate
              onChange={this.handleChange}/>
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input 
              type ="text" 
              className='' 
              placeholder="Password"
              type="text"
              name="password"
              noValidate
              onChange={this.handleChange}/>
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



export default App;
