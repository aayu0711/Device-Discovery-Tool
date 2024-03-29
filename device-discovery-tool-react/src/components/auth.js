import React, { Component } from "react"
import logo from './logo.png'
import '../App.css'


export default class Auth extends Component {
    render() {
        return (
            <div className="auth-wrapper">
              <div className="auth-inner">
                <form>
                <div className="login-image">
                    <img src={logo} />
                </div>
                <h3>Sign In</h3>
                <div className="login-fields">
                    <label htmlFor="exampleInputEmail1">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <br></br>
                </div>
                <div className="login-fields">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="login-fields form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <div className="button">
                    <button type="submit" className="btn btn-primary">Log In</button>
                </div>
                </form>
            </div>
          </div>
        );
    }
}
