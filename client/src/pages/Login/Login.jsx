import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import NetworkTag from '../../components/NetworkTag';
import { StyleSheet, css } from 'aphrodite';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
    }
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit = event => {
    event.preventDefault()
    let password = this.state.password1
    let email = this.state.email
    API.login({
      email: email,
      password: password
    }).then(response => {
      console.log('Login response: ' + response)
      if (response.status === 200) {
        // update App.js state
        this.props.updateUser({
          loggedIn: true,
          username: response.data.username
        })
        // update the state to redirect to home
        this.setState({
          redirectTo: '/home'
        })
    }
    }).catch(err => {
      console.log('Error in login handleFormSubmit ' + err)
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }


// creating login styling
// Must use hexcodes as a string
// var HomePage = React.createclass({ --> attempt to figure out body/bckgrnd
render () {
  const styles = StyleSheet.create({
    body: {background: '#141320'},
    container: {padding: 350, position: 'fixed'},
    formLogin: {
      background: 'lavenderblush', 
      paddingTop: 20, 
      paddingBottom: 20, 
      paddingLeft: 100,
      paddingRight:20,
      borderRadius: 15,
      borderWidth: 5
    },
    h4: {
      paddingBottom: 10, 
      paddingRight: 60,
      color: '#452677',
      textAlign: 'center',
      fontFamily: 'Montserrat'},
    formCtrl: {borderRadius: 5},
    wrapper: {
      textAlign: 'center', 
      paddingTop: 10,
  },
    buttonLog: {
      background: '#7e7fa5', 
      color: 'lavender',
      borderRadius: 15
    },
    buttonSign: {
      background: '#141320', 
      color: 'lavender',
      borderRadius: 15
    },

  });
  // Can't figure out how to get background of whole pg black
  return (
    // <BodyAttribute bodyClass= 'page' className={css(styles.body)}>
    //   <HomePage/>  ---> attempt to figure out body/bckgrnd
    // body tag doesn't seem to be the solution
    // changed bckgrnd color by addint to tag in index.html... don't know if there's a better way
          <div className={css(styles.container)}>
            <div className="row">
            {/* We should move the div more to the center of the page */}
              <div className="col-md-offset-5 col-md-3">
                <div className={css(styles.formLogin)}>
                {/* Google Fonts - Montserrat; couldn't get Antipasto w/out paying
              Can't get it to display */}
                  <h4 className={css(styles.h4)}>Welcome</h4>
                  <form onSubmit={this.handleFormSubmit}>
                  {/* Expanded input tags for styling */}
                  {/* We need to move the email & password/login&sign up on top of each other */}
                    <label>
                      <input 
                        type="email" 
                        id="userName" 
                        className={css(styles.formCtrl)} 
                        placeholder="Email"/>
                    </label>
                    <label>
                      <input 
                        type="password" 
                        id="userPassword" 
                        className={css(styles.formCtrl)} 
                        placeholder="Password"/>
                    </label>
                    <div className={css(styles.wrapper)}>
                    {/* Removed <input type="submit" value="Login"/> as it wouldn't allow 
                  for me to stylize the login button */}
                      <button className={css(styles.buttonLog)}>Login</button>
                      <Link to="/singup">
                        <button className={css(styles.buttonSign)}>Create Account</button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    // </BodyAttribute> ---> attempt to figure out body/bckgrnd
  );

}
}

export default Login;
