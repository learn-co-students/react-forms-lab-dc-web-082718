import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: this.props.maxChars
  };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange = {event => this.handleMessageChange(event)} />
        <p>Remaining Characters: {this.state.remainingChars} </p>
      </div>
    );
  }
  handleMessageChange = (e) =>{
    this.setState({
      message: e.target.value,
      remainingChars:this.props.maxChars - e.target.value.length
    })
  }
}

export default TwitterMessage;
