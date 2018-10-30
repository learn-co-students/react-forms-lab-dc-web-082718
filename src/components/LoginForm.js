import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""

    };
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) =>{
    let usernameInput = e.target.username.value
    let passwordInput = e.target.password.value
    debugger

    e.preventDefault()
    if( usernameInput !== "" && passwordInput !== ""){
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit = {event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"  value = {this.state.username} onChange = {event => this.handleChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value = {this.state.password} onChange = {event => this.handleChange(event)} />
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
