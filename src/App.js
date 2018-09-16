import React, { Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import arrow from './floating_arrow.png';
import logo from './logo.png';
import TextForm from './TextForm';
import InfoModal from './InfoModal';
import './App.css';

class App extends Component {
  status() {
    if (this.props.listening == true) {
      this.props.stopListening()
    } else {
      this.props.startListening()
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header row">
          <img src={logo} className="App-logo col-md-4" alt="logo" />
          <InfoModal class="col-md-4 offset-md-4" />
        </header>
        <TextForm value={this.props.transcript} />
        <button className="speechButton" onClick={()=>{this.status()}}>{this.props.listening ? "Recording" : "Not Recording"}</button>
        <button className="speechButton" onClick={this.props.resetTranscript}>Reset</button>
        <img src={arrow} className="floating-arrow floating" />
      </div>
    );
  }
}

App.defaultProps = {
  transcript: '',
  resetTranscript: '',
  browserSupportsSpeechRecognition: true
};

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(App);
