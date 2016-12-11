import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Voicercise</h2>
        </div>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/watch?v=zGxlamMQ5XI&list=RDMMzGxlamMQ5XI" 
        frameBorder="0" allowFullScreen className="video"></iframe>
        <div className="navbar-nav">
          <a href="/user/sign-in">
          <span className="singIn">Sign In</span>
          </a>
          <a href="/user/sign-up">
          <span className="signUp">Sign up</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;
