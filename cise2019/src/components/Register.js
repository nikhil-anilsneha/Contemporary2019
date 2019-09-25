import React, { Component } from "react";
import "../index.css";
import Login from "./Login";
import { Modal } from "react-bootstrap";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

// const db = require('./db')
// const express = require('express');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      visible: false,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""}
    }
    this.updateStateFirstName=this.updateStateFirstName.bind(this);
    this.updateStateLastName=this.updateStateLastName.bind(this);
    this.updateStateEmail=this.updateStateEmail.bind(this);
    this.updateStatePassword=this.updateStatePassword.bind(this);
  }

  updateStateFirstName(e) {
    this.setState({firstName: e.target.value})
  }

  updateStateLastName(e) {
    this.setState({lastName: e.target.value})
  }

  updateStateEmail(e) {
    this.setState({email: e.target.value})
  }

  updateStatePassword(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      // const expressApp = express();
      // expressApp.get('/register', function (req, res) {
      //   const post = {email:this.email, firstname:this.firstName, lastname:this.lastName, password:this.password}
      //   db.pool.query('INSERT INTO account SET ?', post, function(err, result)
      //   { // maybe just db.query
      //     if (err) throw err;
      //   });
      // });
    } else {
      console.error("Error! check the error message below to fix this.");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 2 ? "minimum 2 characaters required" : this.updateStateFirstName;
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "minimum 2 characaters required" : this.updateStateLastName;
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? this.updateStateEmail
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : this.updateStatePassword;
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };


  render() {
    const { formErrors } = this.state;

    return (
      <>
        {this.state.visible === true ? (
          <Modal
            show={() => this.setState({ visible: true })}
            onHide={() => this.setState({ visible: false })}
            animation={false}
          >
            <div>
              <h1>Create Account</h1>
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="firstName">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className={formErrors.firstName.length > 0 ? "error" : null}
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                  )}
                </div>
                <div className="lastName">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className={formErrors.lastName.length > 0 ? "error" : null}
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.lastName.length > 0 && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                  )}
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    className={formErrors.email.length > 0 ? "error" : null}
                    placeholder="Email"
                    type="email"
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input
                    className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Password"
                    type="password"
                    name="password"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </div>
                <div className="formButton">
                  <button type="submit">
                    <b>Create Account</b>
                  </button>
                </div>
                <div className="formButton">
                  <button
                    type="button"
                    onClick={document.getElementById(Login)}
                  >
                    Already Have An Account
                  </button>
                </div>
                <div className="formButton">
                  <button
                    type="button"
                    onClick={() => this.setState({ visible: false })}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        ) : null}
        <div className="homeButton">
          <button
            type="button"
            onClick={() => this.setState({ visible: true })}
          >
            Register
          </button>
        </div>
      </>
    );
  }
}

export default App;
