import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';

// import '../../css/style.css';

class Landing extends Component {
  render() {
    return (
      <div className="App" style={{textAlign: 'center'}}>
        <div className="App-header" style={{
  backgroundColor: '#222',
  height: '100px',
  padding: '20px',
  color: 'white'
}}>
          <h2>Voicercise</h2>
        </div>
        <div style={{paddingTop:'100px'}}>
          <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/watch?v=zGxlamMQ5XI&list=RDMMzGxlamMQ5XI" 
          frameBorder="0" allowFullScreen className="video" ></iframe>
        </div>
        <div>
          
          <span className="signIn" style={{ marginRight: '10px',textDecoration: 'none'}}><LoginLink>Sign In</LoginLink></span>
         
          
          <span className="signUp" style={{textDecoration: 'none'}}><Link to="/register">Sign Up</Link></span>
          
        </div>
      </div>
    );
  }
}

export default Landing;
