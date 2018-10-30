import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  changeMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  remainingCharacters() {
    return (this.props.maxChars - this.state.message.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} onChange={this.changeMessage}/>
        {this.remainingCharacters()}
      </div>
    );
  }
}

export default TwitterMessage;
