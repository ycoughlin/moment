import React, { Component } from 'react'
import "./style.css";
import Logo from "./scoopload.png";

// import { Link } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div>
        {this.props.loggedIn && 
          <h1 className="welcome-home-h1">Welcome Home, {this.props.name}</h1>
        }
        <img src={Logo} className="Scoopload"/>
      </div>
    )
  }
}

export default Home;
