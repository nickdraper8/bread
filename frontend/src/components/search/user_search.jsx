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

    // componentDidMount() {
    //     if (!this.props.users) {
    //         this.props.fetchUsers(this.state.bounds);
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault()
        this.props.fetchUsers(this.state.bounds);
    }

    handleChange(e) {
        this.setState({ bounds: e.target.value });
    }

    render() {
        let results = '';
        let resultsContainer = '';
        if (this.props.users.length > 0) {
            results = Object.values(this.props.users).map(user => {
                return (
                  <div key={user.id} className="user-search-result-item">
                    {user.username}
                    <i class="fas fa-plus-circle"></i>
                  </div>
                );
            })
            resultsContainer = (
              <div className="user-search-results-container">{results}</div>
            );
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
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </div>
            {resultsContainer}
          </div>
        );
    }
}

export default UserSearch;