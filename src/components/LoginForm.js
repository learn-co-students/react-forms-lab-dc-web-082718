import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username:"",password:""};
  }

  handleUsername = (event) => {
      const val = event.target.value;

      this.setState({username:val})
  }

  handlePassword = (event) => {
      const val = event.target.value;

      this.setState({password:val})
  }

  render() {
    return (
      <form onSubmit={(event) => {
          event.preventDefault();
          if(this.state.username.length != 0 && this.state.password.length){
              this.props.onSubmit({username:this.state.username,password:this.state.password})
          }
      }}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassword}/>
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
