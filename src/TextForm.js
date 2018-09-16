import React from 'react';
import './TextForm.css';
import TextareaAutosize from 'react-autosize-textarea';

class TextForm extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     value: ''
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 // SUBMIT BUTTON FUNCTION
 handleSubmit(event) {
   alert('A journal was submitted: ' + this.state.value);
   event.preventDefault();
 }

 componentWillReceiveProps(nextProps) {
   this.setState({value: nextProps.value})
 }

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <label>
         <TextareaAutosize onChange={this.handleChange} value={this.state.value} placeholder = "Let your emotions do the talking..."/>
       </label>
       <input type="submit" value="Enter Journal"/>
     </form>
   );
 }
}

export default TextForm;
