import React, { Component } from "react";
import "./Register.css";
import Login from "./Login";
import { Modal, PopoverTitle } from "react-bootstrap";
import axios from "axios";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      userprofile: "No Log In",   
      visible: false,
    };
    
  }


  userPost(e) {
    e.preventDefault();
    var url = "/user_detail";
    axios
      .post(url, {
        first_name: this.inputfirstName.value,
        last_name: this.inputlastName.value,
        email: this.inputemail.value,
        password: this.inputpassword.value
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.inputfirstName.value = "";
    this.inputlastName.value = "";
    this.inputemail.value = "";
    this.inputpassword.value = "";
  }

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

  handleChange = e => {
    e.preventDefault();
    
  };


  render() {

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
              <form noValidate>
                <div className="fd">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="fc"
                    placeholder="First Name"
                    type="text"
                    // name="firstName"
                    noValidate
                    ref={infirstName => (this.inputfirstName = infirstName)}
                    // onChange={this.handleChange}
                  />
                  {/* {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                  )} */}
                </div>
                <div className="lastName">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    // className={formErrors.lastName.length > 0 ? "error" : null}
                    className="fc"
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    noValidate
                    ref={inlastName => (this.inputlastName = inlastName)}
                    // onChange={this.handleChange}
                  />
                  {/* {formErrors.lastName.length > 0 && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                  )} */}
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    // className={formErrors.email.length > 0 ? "error" : null}
                    className="fc"
                    placeholder="Email"
                    type="email"
                    name="email"
                    noValidate
                    ref={inemail => (this.inputemail = inemail)}
                    // onChange={this.handleChange}
                  />
                  {/* {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )} */}
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input
                    // className={formErrors.password.length > 0 ? "error" : null}
                    className="fc"
                    placeholder="Password"
                    type="password"
                    name="password"
                    noValidate
                    ref={inpassword => (this.inputpassword = inpassword)}
                    // onChange={this.handleChange}
                  />
                  {/* {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )} */}
                </div>
                <div className="formButton">
                  <button type="submit"
                  onClick={this.userPost.bind(this)}
                  >
                    <b>Create Account</b>
                  </button>
                </div>
                <div className="formButton">
                  <button
                    type="button"
                    onClick={() => this.setState({ visible: false })}
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