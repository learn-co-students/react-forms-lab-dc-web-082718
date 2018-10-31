import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'none yet',
      charLeft: this.props.maxChars
    };
  }

  handleInput = (event) => {

    this.setState({
      message: event.target.value,
      charLeft: (this.props.maxChars) - (this.state.message.length)
    }, () => console.log(this.state))
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={event => this.handleInput(event)}/>
        {this.props.maxChars - this.state.message.length}
        <br></br>
        <strong>Characters Left: {this.state.charLeft}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
