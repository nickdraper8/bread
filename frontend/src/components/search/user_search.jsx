import React from 'react';
import './search.css';

class UserSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bounds: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.fetchUsers(this.state.bounds);
    }

    handleChange(e) {
        this.setState({ bounds: e.target.value });
    }

    render() {
      let results = [];
      let resultsContainer = "";
      if (Object.values(this.props.users).length > 0) {
        Object.values(this.props.users).forEach((user) => {
          debugger
          if (user._id !== this.props.currentUserId) {
            results.push(
              <div
                key={user._id}
                onClick={this.props.handleAddAttendee}
                className="user-search-result-item"
              >
                {user.username}
                <i className="fas fa-plus-circle"></i>
              </div>
            );
          }
        });
        if (results.length > 0) {
          resultsContainer = (
            <div className="user-search-results-container">{results}</div>
          );
        }
      }
      return (
        <div id="user-search-container">
          <div className="user-search-bar-container">
            <form onSubmit={this.handleSubmit}>
              <input
                name="search"
                type="text"
                value={this.state.bounds}
                onChange={this.handleChange}
                placeholder="Search Usernames"
              />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          {resultsContainer}
        </div>
      );
    }
}

export default UserSearch;