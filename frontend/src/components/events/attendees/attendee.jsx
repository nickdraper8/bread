import React from 'react';

class Attendee extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <div id="attendee-container">
                {this.props.attendee.firstname}
            </div>
        )
    }
}

export default Attendee;