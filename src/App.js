import React, { Component } from 'react';
import logo from './logo.png';
import TextForm from './TextForm';
import InfoModal from './InfoModal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header row">
          <img src={logo} className="App-logo col-md-4" alt="logo" />
          <InfoModal class="modal-icon col-md-4 offset-md-4" />
        </header>
        <TextForm />
      </div>
    );
  }
}

export default App;
