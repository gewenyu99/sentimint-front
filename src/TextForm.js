import React from 'react';
import './TextForm.css';
import TextareaAutosize from 'react-autosize-textarea';

class TextForm extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     value: '',
     sentiment: ''
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 // SUBMIT BUTTON FUNCTION
 handleSubmit(event) {
   event.preventDefault();
   var xhttp = new XMLHttpRequest();
   xhttp.open("POST", 'https://us-central1-sentimint-e1de7.cloudfunctions.net/helloWorld', true);
   // xhttp.open("POST", 'http://localhost:5000/sentimint-e1de7/us-central1/helloWorld', true);
   xhttp.send(this.state.value);
   var that = this;
   xhttp.onreadystatechange = function (e) {
     window.scrollBy(0, 210);
     console.log(xhttp.responseText);
     e.preventDefault();
     that.setState({
       sentiment: xhttp.responseText
     });
     document.getElementById("sentiment_text").innerHTML = that.state.sentiment;
   };
 }

 componentWillReceiveProps(nextProps) {
   this.setState({value: nextProps.value})
 }

 render() {
   return (
     <div id="input-area">
     <form onSubmit={this.handleSubmit}>
       <label>
         <TextareaAutosize id="text-box" onChange={this.handleChange} value={this.state.value} placeholder = "Let your emotions do the talking..." autofocus/>
       </label>
       <input type="submit" value="Enter Journal"/>
     </form>
     </div>
   );
 }
}

export default TextForm;
