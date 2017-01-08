import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';

import css from  '../../css/style.css';

class Landing extends Component {
  render() {
    return (
    <div>
      <nav className="navbar navbar-static-top ">
        <div className="container-fluid ">
          {/*<img className="img" src={'../../images/github-icon.png'} alt="img" />*/}
           <span className="nav navbar-nav navbar-left">
            <h2 className="title"><span>Voicercise</span></h2>
           </span>
              <ul className="nav navbar-right">
                <span className="signIn icon-bar"><LoginLink><button type="button" className="btn btn-default navbar-btn">Sign In</button></LoginLink></span>
                <span className="signUp icon-bar"><Link to="/register"><button type="button" className="btn btn-default navbar-btn">Sign Up</button></Link></span>
              </ul>
        </div>
      </nav>
    <div className="row">
      <div >
          <h2 className="container-fluid text-center whatIs"><b>What's in Voicercise?</b></h2><br/>
      </div>
      <div className="container-fluid text-center infOf"> 
        <h3>
          <p>
          Voicercise is a web page that will help you practice<br/>
          <br/>
          and determine what is your vocal range in a easy way.<br/>
          <br/>
          It will help you practice vocalisation in your home.<br/>
          <br/>
          Just give it a try. 
          </p>
      </h3>

      </div>
    </div>  
     {/*<div >
          <iframe  
          src="https://www.youtube.com/embed/watch?v=zGxlamMQ5XI&list=RDMMzGxlamMQ5XI" 
          frameBorder="0" allowFullScreen className="video" ></iframe>
        </div>*/}
    </div>
    );
  }
}

export default Landing;
