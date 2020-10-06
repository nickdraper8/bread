import React from 'react'

class UserSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bounds: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (!this.props.users) {
            this.props.fetchUsers(this.state.bounds);
        }
    }

    handleSubmit() {
        this.props.fetchUsers(this.state.bounds);
    }

    handleChange(e) {
        this.setState({ bounds: e.target.value });
    }

    render() {
        let results = '';
        if (this.props.users) {
            results = Object.values(this.props.users).map(user => {
                return (
                    <div>
                        {user.username}
                    </div>
                )
            })
        }
        return (
            <div id="user-search-container">
                <div className="user-search-bar-container">
                    <form>
                        <input name="search" type="text" value={this.state.bounds} onChange={this.handleChange} />
                        <button type="button" onClick={this.handleSubmit}>SEARCH</button>
                    </form>
                </div>
                <div className="user-search-results-container">
                    {results}
                </div>
            </div>
        )
    }
}

export default UserSearch;