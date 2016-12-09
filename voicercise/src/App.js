import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Voicercise</h2>
        </div>
        <iframe width="560" height="315" 
        src="https://www.youtube.com//embed/watch?v=zGxlamMQ5XI&list=RDMMzGxlamMQ5XI" 
        frameBorder="0" allowFullScreen className="video"></iframe>

      </div>
    );
  }
}

export default App;
