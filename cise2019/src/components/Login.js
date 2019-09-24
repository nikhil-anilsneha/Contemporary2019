import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "../index.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // firstName: null,
      // lastName: null,
      emailForLogin: null,
      passwordForLogin: null,
      isPasswordSeen: false,
      word: "show",
      addModal: false,
      formErrors: {
        // firstName: "",
        // lastName: "",
        emailForLogin: "",
        passwordForLogin: ""
      }
    };
  }

  visible() {
    this.setState({
      visible: !this.state.visible
    });
  }

  ShowHide = () => {
    const { isPasswordSeen } = this.state;
    this.setState({
      isPasswordSeen: !isPasswordSeen
    });
  };

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  openAddModel() {
    this.setState({ addModal: true });
  }

  handleChange = e => {
    e.preventDefault();
    // const { name, value } = e.target;
    const { emailForLogin, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    formErrors.emailForLogin = emailRegex.test(value)
      ? ""
      : "invalid email address";

    this.setState({ formErrors, [emailForLogin]: value }, () =>
      console.log(this.state)
    );
  };

  goHome() {}

  goRegister() {}

  render() {
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
            <div className="form-wrapper">
              <h1>LOGIN</h1>
              <div className="emailForLogin">
                <label htmlFor="EmailForLogin">Email</label>
                <input
                  className={
                    formErrors.emailForLogin.length > 0 ? "error" : null
                  }
                  placeholder="email address"
                  type="text"
                  name="Email"
                  noValidate
                  onChange={this.handleChange}
                />
              </div>
              <div className="passwordForLogin">
                <label htmlFor="PasswordForLogin">Password</label>
                <input
                  placeholder="password"
                  type={isPasswordSeen ? "text" : "password"}
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                <button className="showHide" onClick={this.ShowHide}>
                  show/hide password
                </button>
              </div>
              <div className="clickLogin">
                <button>Login</button>
              </div>
              <div className="clickCancel">
                <button onClick={() => this.setState({ addModal: false })}>
                  Cancel
                </button>
              </div>
              <div className="haveNoAccount">
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
