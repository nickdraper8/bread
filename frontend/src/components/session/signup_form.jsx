import React from "react";
import { withRouter } from "react-router-dom";
import './signup.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fname: "",
      lname: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  // componentDidMount(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push("/login");
  //   }

  //   this.setState({ errors: nextProps.errors });
  // }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      fname: this.state.fname,
      lname: this.state.lname,
      phone: this.state.phone,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <div className="signup-form-name-container">
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("fname")}
                placeholder="First Name"
              />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("lname")}
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <input
              type="text"
              value={this.state.handle}
              onChange={this.update("username")}
              placeholder="username"
            />
            <div className="signup-form-password-container">
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
            </div>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
