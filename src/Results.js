import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Results = () => (
        <div>
        <div class="Resultsheader">
                <p id="sentiment_text" > </p>
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
        </div>
)

class Homepage extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            currentview : "home"
          };

          this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleSubmit() {
          this.setState({currentview: "results"});
        }

        render() {
                if (this.state.currentview == "home") {
                  return <Home handleSubmit={this.handleSubmit}/>;
                } else {
                  return <Results/>;
                }

        }
}

export default Homepage;