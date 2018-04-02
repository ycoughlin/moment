import React, { Component } from "react";
import { Link } from 'react-router-dom'
import API from "../../utils/API";

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password1: "",
      password2: ""
    }
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    let password = this.state.password1
    let email = this.state.email
    // verify both passwords are the same
    if (this.state.password1 === this.state.password2 && this.state.password1.length > 7) {
      // check if email doesnt already exist in db
      API.createUser({ 
        email: email, 
        password: password 
      }).then(res => {
        console.log('api create user res is ' + JSON.stringify(res))
        if(res.data.error) {
          console.log('entry exists')
        } else {
          this.setState({ //redirect to login page (try to)
            redirectTo: '/'
          })
        }
      }).catch(error => console.log(error))
    } else {
      if(this.state.password1.length < 8 )
        console.log("Password must be at least 8 characterse")
      if (this.state.password1 !== this.state.password2)
        console.log("Passwords do not match")
    }
  }

  render() {
    return (
      <div>
        <Link to="/">
          <button>Back to Login</button>
        </Link>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Email:
            <input 
              type="email" 
              value={this.state.email} 
              name="email"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            Password:
            <input 
              type="password" 
              value={this.state.password1} 
              name="password1"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <label>
            Verify Password:
            <input 
              type="password" 
              value={this.state.password2} 
              name="password2"
              onChange={this.handleInputChange}
            ></input>
          </label>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }

// Attempt to place above into styling
// Error: lines 129-173: 'css' is not defined 

  // render() {
  //   const styles = StyleSheet.create({
  //     container2: { padding: 25, position: 'fixed' },
  //     formLogin2: {
  //       background: 'lavenderblush',
  //       paddingTop: 10,
  //       paddingBottom: 20,
  //       paddingLeft: 20,
  //       paddingRight: 20,
  //       borderRadius: 15,
  //       borderWidth: 5
  //     },
  //     h: {
  //       paddingBottom: 10,
  //       color: '#452677',
  //       textAlign: 'center',
  //       fontFamily: 'Montserrat'
  //     },
  //     formCtrl2: { borderRadius: 5 },
  //     wrapper2: { textAlign: 'center' },
  //     buttonCreate: {
  //       background: '#7e7fa5',
  //       color: 'lavender',
  //       borderRadius: 15
  //     },
  //     buttonBck: {
  //       background: '#141320',
  //       color: 'lavender',
  //       borderRadius: 15
  //     },

  //   });

  //   return 
  //     <div className={css(styles.container2)}>
  //       <div className="row">
  //         {/* We should move the div more to the center of the page */}
  //         <div className="col-md-offset-5 col-md-3">
  //           <div className={css(styles.formLogin2)}>
  //             <Link to="/">
  //               <button className={css(styles.buttonBck)}>Back to Login</button>
  //             </Link>              
  //             {/* Google Fonts - Montserrat; couldn't get Antipasto w/out paying
  //             Can't get it to display */}
  //             <h4 className={css(styles.h)}>Create Account</h4>
  //             <form onSubmit={this.handleFormSubmit}>
  //               {/* Expanded input tags for styling */}
  //               {/* We need to move the email & password/login&sign up on top of each other */}
  //               <label>
  //                 <input 
  //                   type="email" 
  //                   value={this.state.email}
  //                   name="email"
  //                   className={css(styles.formCtrl2)} 
  //                   placeholder="Email"
  //                   onChange={this.handleInputChange} />
  //               </label>
  //               <label>
  //                 <input 
  //                   type="password" 
  //                   value={this.state.password1}
  //                   name="password1" 
  //                   class={css(styles.formCtrl2)} 
  //                   placeholder="Password"
  //                   onChange={this.handleInputChange} />
  //               </label>
  //               <label>
  //               <input
  //                 type="password"
  //                 value={this.state.password2}
  //                 name="password2"
  //                 class={css(styles.formCtrl2)}
  //                 placeholder="Verify Password"
  //                 onChange={this.handleInputChange} />
  //               </label>
  //               <div className={css(styles.wrapper2)}>
  //                 {/* Removed <input type="submit" value="Login"/> as it wouldn't allow 
  //                 for me to stylize the login button */}
  //                 <button className={css(styles.buttonCreate)}>Create</button>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
    

  // }
}

export default Signup;
