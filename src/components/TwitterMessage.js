import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCharsLeft: 140
    };
  }

  handleInput = (event) => {
    this.setState({
      currentCharsLeft: 140 - event.target.value.length
    })
  }

  render() {
    return (<div>
      <strong>Your message:</strong>
      <input onChange={this.handleInput} type="text"/>
      <p>{this.state.currentCharsLeft}</p>
    </div>);
  }
}

export default TwitterMessage;
