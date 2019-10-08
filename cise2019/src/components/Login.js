import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./Login.css";
import axios from "axios";

window.globalFirstName = "";
window.globalLastName = "";
window.globalEmail = "";
window.globalPassword = "";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPasswordSeen: false,
      users: [],
      validUser: false,
      word: "show",
      addModal: false
      // formErrors: {
      //   // firstName: "",
      //   // lastName: "",
      //   emailForLogin: "",
      //   passwordForLogin: ""
      // }
    };
  }

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
            window.globalPassword = JSON.stringify(this.state.users.data[i].password);
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
        alert("Hello "+window.globalFirstName+"!. Your login is successful.");
        this.setState({addModal:false});
      } else {
        console.log("login failed.");
        this.setState({ addModal: true });
        alert("login failed.");
      }
      console.log(this.state.validUser);
      
    });
  }
  

  ShowHide = () => {
    const { isPasswordSeen } = this.state;
    this.setState({
      isPasswordSeen: !isPasswordSeen
    });
  };


  goHome() {}

  goRegister() {}

  render() {
    const { users } = this.state;
    const { formErrors } = this.state;
    const { isPasswordSeen } = this.state;
    return (
      <>
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
                  // className={
                  //   formErrors.emailForLogin.length > 0 ? "error" : null
                  // }
                  placeholder="email address"
                  type="text"
                  name="Email"
                  ref={inEmail => (this.inputEmail = inEmail)}
                  // onChange={this.updateStateEmail}
                />
              </div>
              <div className="passwordForLogin">
                <label htmlFor="PasswordForLogin">Password</label>
                <input
                  placeholder="password"
                  type={isPasswordSeen ? "text" : "password"}
                  name="password"
                  ref={inPassword => (this.inputPassword = inPassword)}
                  // onChange={this.updateStatePassword}
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

