import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  changeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  changePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  submission = (event) => {
    event.preventDefault()
    if (!this.state.username === '' || !this.state.password === '') {
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form  onSubmit={this.submission}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.changeUsername}
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
              onChange={this.changePassword}
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
