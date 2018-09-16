import React from 'react';

class TextForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "What's on your mind?",
            sentiment: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://us-central1-sentimint-e1de7.cloudfunctions.net/helloWorld', true);
        // xhttp.open("POST", 'http://localhost:5000/sentimint-e1de7/us-central1/helloWorld', true);
        xhttp.send(this.state.value);
        var that = this;
        xhttp.onreadystatechange = function (e) {
            console.log(xhttp.responseText);
            e.preventDefault();
            that.setState({sentiment: xhttp.responseText});
            document.getElementById("sentiment_text").innerHTML = that.state.sentiment;
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <textarea value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <p id="sentiment_text"> </p>
            </div>
        );
    }


export default TextForm;
