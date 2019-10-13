import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./Login.css";
import axios from "axios";

//Global variables to be used in profile
window.globalFirstName = "";
window.globalLastName = "";
window.globalEmail = "";

// function redirect()
// {
//   var url = "/HomePage.js";
//   window.location(url);
// }

//Constructor
export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPasswordSeen: false,
      users: [],
      validUser: false,
      word: "show",
      addModal: false
    };
  }

  //To get the user details from database and check the input email and password are valid or not.
  //To show alert message that the login is valid or not.
  userGet(e) {
    e.preventDefault();
    var url = "/user_detail";
    var checkEmail = this.inputEmail.value;
    var checkPassword = this.inputPassword.value;
    var length = 0;
    var good = false;
    axios.get(url).then(ambilData => {
      console.log(ambilData.data);
      this.setState({
        users: ambilData.data
      });
      console.log(this.state.users.data.length);
      length = this.state.users.data.length;
      console.log(checkEmail);
      console.log(checkPassword);
      console.log(length);

      for (var i = 0; i < length; i++) {
        if (this.state.users.data[i].email === checkEmail) {
          if (this.state.users.data[i].password === checkPassword) {
            this.setState({ validUser: true });
            window.globalFirstName = JSON.stringify(this.state.users.data[i].first_name);
            window.globalLastName = JSON.stringify(this.state.users.data[i].last_name);
            window.globalEmail = JSON.stringify(this.state.users.data[i].email);
            good = true;
            break;
          } else {
            good = false;
          }
        } else {
          good = false;
        }
      }
      if (good === true) {
        console.log("login successful");
        alert("Hello "+window.globalFirstName+"! Your Login is Successful.");
        this.setState({addModal:false});
        window.location.href="http://localhost:3001/HomePage.js";
      } else {
        console.log("login failed.");
        this.setState({ addModal: true });
        alert("Login Failed.");

      }
      console.log(this.state.validUser);
      
    });
  }
  

  //To show and hide password
  ShowHide = () => {
    const { isPasswordSeen } = this.state;
    this.setState({
      isPasswordSeen: !isPasswordSeen
    });
  };

  render() {
    const { users } = this.state;
    const { formErrors } = this.state;
    const { isPasswordSeen } = this.state;
    return (
      <>
        {/* When we click login button on the navigation bar,
        it set "addModal" state to true and pop up the login. */}
        {this.state.addModal === true ? (
          <Modal
            show={() => this.setState({ addModal: true })}
            onHide={() => this.setState({ addModal: false })}
            animation={false}
          >
            <div>
              <h1>LOGIN</h1>
              <div className="emailForLogin">
                <label htmlFor="EmailForLogin">Email</label>
                <input
                  placeholder="email address"
                  type="text"
                  name="Email"
                  ref={inEmail => (this.inputEmail = inEmail)}
                />
              </div>
              <div className="passwordForLogin">
                <label htmlFor="PasswordForLogin">Password</label>
                <input
                  placeholder="password"
                  type={isPasswordSeen ? "text" : "password"}
                  name="password"
                  ref={inPassword => (this.inputPassword = inPassword)}
                />
                <button className="showHide" onClick={this.ShowHide}>
                  show/hide password
                </button>
              </div>
              <div className="clickLogin">
                <button onClick={this.userGet.bind(this)}>Login</button>
              </div>
              <div className="clickLogin">
                <button onClick={() => this.setState({ addModal: false })}>
                  Cancel
                </button>
              </div>
              <div className="clickLogin">
                <button onClick={() => this.setState({ addModal: false })}>
                  <b>Have no account?</b>
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
        <div className="homeButton">
          <button onClick={() => this.setState({ addModal: true })}>
            Login
          </button>
        </div>
      </>
    );
  }
}

export default Login;

