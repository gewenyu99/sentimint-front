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
                  <a href="https://www.facebook.com/events/669158016775456/">
                  <div class="content">
                    <h3>Wine and Sign - Christmas Signs!</h3>
                    <p>Join Nailed It Nite and The Kitchener Market for another DIY Win and Sign night.</p>
                  </div>
                  </a>
                </div>
                <div class="item">
                  <div class="content">
                    <h3>Local Marathon</h3>
                    <p>Join us for the local Terry Fox run at University of Western Ontario on September 18th.</p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <h3>Coffee and Code</h3>
                    <p>A social for coders, free coffee provided.</p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <h3>Stargazing and Bonfires.</h3>
                    <p>Join the Engineering society at the University of Waterloo for stargazing and bonfires. </p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <h3>Photography Classes</h3>
                    <p>Capture the moments in life you never wish to forget.</p>
                  </div>
                </div>
          </div>
          <div class="Resultsheader">
            <p id="sentiment_text"></p>
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
