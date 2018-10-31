import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'none yet',
      password: 'none yet'
    };
  }

  handleUsername= (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.password && this.state.username){
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={event => this.handleUsername(event)}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={event => this.handlePassword(event)}
              />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
