import React from 'react';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Let your emotions do the talking...'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // SUBMIT BUTTON FUNCTION
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} />

        </label>
        <input type="submit" value="Enter Journal"
        />
      </form>
    );
  }

//           textarea.style.height = ""; /* Reset the height*/
        //  textarea.style.height = Math.min(text.scrollHeight, heightLimit) + "px";

}

export default TextForm;
