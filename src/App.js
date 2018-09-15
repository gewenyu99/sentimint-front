import React, { Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import arrow from './floating_arrow.png';
import logo from './logo.png';
import TextForm from './TextForm';
import InfoModal from './InfoModal';
import './App.css';
import './TextForm.css';
import question from './question.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header row">
          <img src={logo} className="App-logo col-md-4" alt="logo" />
          <InfoModal class="modal-icon col-md-4 offset-md-4" />
        </header>
        <TextForm />
        <SpeechRecognition>
          abc
        </SpeechRecognition>
        <img src={arrow} className="floating-arrow floating" />
      </div>
    );
  }
}

export default App;
