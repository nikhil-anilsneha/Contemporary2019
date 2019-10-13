import React, { Component } from "react";
import "./Register.css";
import { Modal, PopoverTitle } from "react-bootstrap";
import axios from "axios";
import { Link, Router, Redirect } from 'react-router-dom';

//define sample email to check the email input valid or not
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

//Error handling for users submit register without putting anything
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

//Constructor
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      userprofile: "No Log In",
      visible: false,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };

  }

  //when user create accoount, 
  //get all user details and save into database and 
  //display register successful or not if inputs are vailid.
  userPost(e) {
    e.preventDefault();
    var url = "/user_detail";

    if (formValid(this.state)) {
      this.setState({ visible: false });
      axios
        .post(url, {
          first_name: this.inputfirstName.value,
          last_name: this.inputlastName.value,
          email: this.inputemail.value,
          password: this.inputpassword.value
        })
        .then(function (response) {
          console.log(response);
          alert("Register Successful!")
          window.location.href="/HomePage.js";
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
      alert("Invalid Registration! Check Errors!")
      this.setState({ visible: true });
    }

    this.inputfirstName.value = "";
    this.inputlastName.value = "";
    this.inputemail.value = "";
    this.inputpassword.value = "";
  }

  //backup function if I need to get the information from database
  //It is not used in sprint two but 
  //if I have to do user story about "forget password", I have to use this one.
  userGet(e) {
    e.preventDefault();
    var url = "/user_detail";
    axios.get(url).then(ambilData => {
      console.log(ambilData.data);
      this.setState({
        user: ambilData.data
      });
    });
  }

  //When user putting inputs in register form,
  //checking invalid inputs or not.
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 2 ? "Minimum 2 Characters Required" : {};
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "Minimum 2 Characters Required" : {};
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? {}
          : "Invalid Email Address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 Characters Required" : {};
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
        {/* When we click register button on the navigation bar,
        it set "visible" state to true and pop up the register from. */}
        {this.state.visible === true ? (
          <Modal
            show={() => this.setState({ visible: true })}
            onHide={() => this.setState({ visible: false })}
            animation={false}
          >
            <div>
              <h1>Create Account</h1>
              <form noValidate>
                <div className="firstName">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className={formErrors.firstName.length > 0 ? "error" : null}
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    noValidate
                    ref={infirstName => (this.inputfirstName = infirstName)}
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
                    ref={inlastName => (this.inputlastName = inlastName)}
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
                    ref={inemail => (this.inputemail = inemail)}
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
                    ref={inpassword => (this.inputpassword = inpassword)}
                    onChange={this.handleChange}
                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </div>
                <div className="createAccount">
                  <button type="submit"
                    onClick={this.userPost.bind(this)}
                  >
                    {/* <Link to="./HomePage.js">alert("Register Successful!")</Link> */}
                    <b>Create Account</b>
                  </button>
                </div>
                <div className="createAccount">
                  <button
                    type="button"
                    onClick={() => this.setState({ visible: false })}
                  >

                    Already Have An Account
                  </button>
                </div>
                <div className="createAccount">
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