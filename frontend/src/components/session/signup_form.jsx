import React from "react";
import { withRouter, Link } from "react-router-dom";
import './signup.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentDidUpdate() {
    if (this.props.signedIn === true) {
      this.props.history.push("/login");
    }

    // Set or clear errors
    if (this.state.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user);
  }

  renderErrors() {
    return (
      <ul className="session-errors-list">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`} className="session-error">{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container-outer-container">
        <div className="signup-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="signup-form">
              <div className="sign-up-create-a-new-account">
                Create a New Account
              </div>
              <div className="signup-form-name-container">
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    value={this.state.firstname}
                    onChange={this.update("firstname")}
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={this.state.lastname}
                    onChange={this.update("lastname")}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <label>Email</label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <label>Username</label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
              />
              <label>Phone Number</label>
              <input
                type="tel"
                value={this.state.phone}
                onChange={this.update("phone")}
                placeholder="Phone Number - 012-345-6789"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
              <div className="signup-form-password-container">
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={this.state.password2}
                    onChange={this.update("password2")}
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <input type="submit" value="Submit" />
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login">Log In</Link>
                </span>
              </p>
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
