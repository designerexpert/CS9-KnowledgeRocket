import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Billing.css';

function mapStateToProps(state) {
    return {
        state
    };
}

class Billing extends Component {
    componentDidMount() {
        // Checks for User to be Authenticated
        // If not authenticated it will send the user to <login/>
        // If authenticated it will set the state with the current user.
        if (!this.props.state.user.authenticated) {
            this.props.history.push('/rocket/auth');
        }
    }
    render() {
        return (
            <div className='Main_container'>
                BILLING PLACEHOLDER
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Billing);