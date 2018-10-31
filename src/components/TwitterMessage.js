import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      characters: this.props.maxChars
    };
  }

  handleChange = event => {
  this.setState({
    value: event.target.value,
    characters: this.props.maxChars - event.target.value.length
  })
}

  render() {
    return (
      <div>
        <strong>Characters left: {this.state.characters}</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
