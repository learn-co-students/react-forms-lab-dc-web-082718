import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
    console.log(this.state)
  }

}

export default TwitterMessage;
