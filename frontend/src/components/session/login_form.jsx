import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentDidUpdate() {
    if (this.props.currentUser === true) {
      this.props.history.push("/");
    }

    // Set or clear errors
    if (this.state.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.login(user);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    let user = {
      username: "DemoUser",
      password: "password",
    };
    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul className="session-errors-list">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`} className="session-error">
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-page-container">
        <div className="login-signup-temp-nav-bar">
          <div className="login-signup-bread-title">BREAD</div>
          <div className="login-signup-bread-nav-buttons">
            <Link to="/signup">SIGN UP</Link>
          </div>
        </div>
        <div className="login-form-container">
          <div className="login-form-inner-container">
            <form onSubmit={this.handleSubmit}>
              <div className="login-form">
                <p>Log In</p>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("username")}
                  placeholder="Username"
                />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
                <input type="submit" value="Submit" />
                <div className="dont-have-an-account">
                  Don't have an account?
                </div>
                <span>
                  <Link className="create-an-account-button" to="/signup">
                    Create an Account
                  </Link>
                </span>
                <div>
                  <button
                    onClick={this.handleDemoLogin}
                    className="demo-user-button"
                  >
                    Demo User
                  </button>
                </div>
                {this.renderErrors()}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
