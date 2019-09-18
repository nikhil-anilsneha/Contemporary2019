import React, { Component } from 'react';
import './Login.css';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );



class Login  extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            // firstName: null,
            // lastName: null,
            emailForLogin: null,
            passwordForLogin: null,
            isPasswordSeen: false,
            word: 'show',
            formErrors: {
            // firstName: "",
            // lastName: "",
            emailForLogin: "",
            passwordForLogin: ""
            }
        };
    }

    ShowHide = () => {
        const { isPasswordSeen } = this.state;
        const { word } = this.state;
        this.setState({
            isPasswordSeen: !isPasswordSeen
        })
    }

    handleChange = e => {
        e.preventDefault();
        // const { name, value } = e.target;
        const { emailForLogin, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        formErrors.emailForLogin = emailRegex.test(value)
            ? ""
            : "invalid email address";
    
        // switch (name) {
        //   case "firstName":
        //     formErrors.firstName =
        //       value.length < 2 ? "minimum 2 characaters required" : "";
        //     break;
        //   case "lastName":
        //     formErrors.lastName =
        //       value.length < 2 ? "minimum 2 characaters required" : "";
        //     break;
        //   case "email":
        //     formErrors.email = emailRegex.test(value)
        //       ? ""
        //       : "invalid email address";
        //     break;
        //   case "password":
        //     formErrors.password =
        //       value.length < 6 ? "minimum 6 characaters required" : "";
        //     break;
        //   default:
        //     break;
        // }
    
        this.setState({ formErrors, [emailForLogin]: value }, () => console.log(this.state));
    };

    render() { 
        const { formErrors } = this.state;
        const { isPasswordSeen } = this.state;
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>LOGIN</h1>
                    <div className='emailForLogin'>
                        <label htmlFor="EmailForLogin">Email</label>
                            <input
                            className={formErrors.emailForLogin.length > 0 ? "error" : null}
                            placeholder="email address"
                            type="text"
                            name="Email"
                            noValidate
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className='passwordForLogin'>
                        <label htmlFor="PasswordForLogin">Password</label>
                            <input
                            // className={formErrors.firstName.length > 0 ? "error" : null}
                            placeholder="password"
                            type={ isPasswordSeen ? "text" : "password"}
                            name="password"
                            noValidate
                            onChange={this.handleChange}
                            />
                            <button className="showHide" onClick={this.ShowHide}>show/hide password</button>
                    </div>
                    <div className="clickLogin">
                        <button>Login</button>
                    </div>
                    <div className="clickCancel">
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default Login;