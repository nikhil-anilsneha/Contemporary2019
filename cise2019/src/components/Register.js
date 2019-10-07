import React, { Component } from "react";
import "./Register.css";
import Login from "./Login";
import { Modal, PopoverTitle } from "react-bootstrap";
import axios from "axios";

// var server = require('../server.js');

// var fileManager = require('./FileManager');
// const fileName = __dirname + './temp.txt';
// fileManager.createNewFile(fileName);

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "us-cdbr-iron-east-02.cleardb.net",
//   user: "b72f7916dad1ba",
//   password: "bf43f260",
//   database: "heroku_25a635bc8a152af",
// });



// var path = 'data.json'
// var data = JSON.stringify(account);
// fs.writeFileSync(path,data);
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
// if (this.readyState == 4 && this.status == 200) {
//    // Typical action to be performed when the document is ready:
//   //  document.getElementById("demo").innerHTML = xhttp.responseText;
//   console.log(xhttp.responseText);
// }
// };
// xhttp.open("GET", "Account.json", true);
// xhttp.send();



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
      user: [],
      userprofile: "No Log In",
      // firstName: null,
      // lastName: null,
      // email: null,
      // password: null,
      visible: false,
      // formErrors: {
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   password: ""}
    }
    // this.updateStateFirstName=this.updateStateFirstName.bind(this);
    // this.updateStateLastName=this.updateStateLastName.bind(this);
    // this.updateStateEmail=this.updateStateEmail.bind(this);
    // this.updateStatePassword=this.updateStatePassword.bind(this);
  }

  // updateStateFirstName(e) {
  //   this.setState({firstName: e.target.value})
  // }

  // updateStateLastName(e) {
  //   this.setState({lastName: e.target.value})
  // }

  // updateStateEmail(e) {
  //   this.setState({email: e.target.value})
  // }

  // updateStatePassword(e) {
  //   this.setState({password: e.target.value})
  // }

  // handleSubmit = e => {
  //   e.preventDefault();

  //   if (formValid(this.state)) {
  //     // const expressApp = express();
  //     // expressApp.get('/register', function (req, res) {
  //     //   const post = {email:this.email, firstname:this.firstName, lastname:this.lastName, password:this.password}
  //     //   db.pool.query('INSERT INTO account SET ?', post, function(err, result)
  //     //   { // maybe just db.query
  //     //     if (err) throw err;
  //     //   });
  //     // });
  //     con.connect(function(err) {
  //       if (err) throw err;
  //       console.log("Connected!");
  //       var fname = this.firstName;
  //       var lname = this.lastName;
  //       var mail = this.email;
  //       var pass = this.password;
  //       
  //       con.query(sql, [values], function (err) {
  //         if (err) throw err;
  //         console.log("inserted");
  //       });
  //     });
  //   } else {
  //     console.error("Error!");
  //   }
  // };

  

  userPost(e) {
    e.preventDefault();
    var url = "/data";
    axios
      .post(url, {
        fn: this.inputfirstName.value,
        ln: this.lastName.value,
        email: this.email.value,
        pass: this.password.value
        // shipping: this.inputshipping.value
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.inputfirstName.value = "";
    this.lastName.value = "";
    this.email.value = "";
    this.password.value = "";
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
    // const { name, value } = e.target;
    // let formErrors = { ...this.state.formErrors };

    // switch (name) {
    //   case "firstName":
    //     formErrors.firstName =
    //       value.length < 2 ? "minimum 2 characaters required" : this.updateStateFirstName;
    //     break;
    //   case "lastName":
    //     formErrors.lastName =
    //       value.length < 2 ? "minimum 2 characaters required" : this.updateStateLastName;
    //     break;
    //   case "email":
    //     formErrors.email = emailRegex.test(value)
    //       ? this.updateStateEmail
    //       : "invalid email address";
    //     break;
    //   case "password":
    //     formErrors.password =
    //       value.length < 6 ? "minimum 6 characaters required" : this.updateStatePassword;
    //     break;
    //   default:
    //     break;
    // }

    // this.setState({ formErrors, [name]: value }, () => console.log(this.state));
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
              {/* <form onSubmit={this.handleSubmit} noValidate> */}
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
                  {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                  )}
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
                    ref={lastName => (this.lastName = lastName)}
                    // onChange={this.handleChange}
                  />
                  {formErrors.lastName.length > 0 && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                  )}
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
                    ref={email => (this.email = email)}
                    // onChange={this.handleChange}
                  />
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
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
                    ref={password => (this.password = password)}
                    // onChange={this.handleChange}
                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
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