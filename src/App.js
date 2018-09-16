import React, { Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import arrow from './floating_arrow.png';
import logo from './logo.png';
import TextForm from './TextForm';
import InfoModal from './InfoModal';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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
        <div id="buttonBox">
          <button className="speechButton" onClick={()=>{this.status()}}>{this.props.listening ? "Recording" : "Not   Recording"}</button>
          <button className="speechButton" onClick={this.props.resetTranscript}>Reset</button>
        </div>
        <div class="container">
                
                <div class="item">
                  <div class="content">
                    <h3>Title</h3>
                    <p>Lorem ipsum amet</p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <h3>Title</h3>
                    <p>Lorem ipsum amet</p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <h3>Title</h3>
                    <p>Lorem ipsum amet</p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <h3>Title</h3>
                    <p>Lorem ipsum amet</p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <h3>Title</h3>
                    <p>Lorem ipsum amet</p>
                  </div>
                </div>
          </div>
          <div class="Resultsheader">
            <p id="sentiment_text" > </p>
          </div>
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
