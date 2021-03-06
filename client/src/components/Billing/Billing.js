import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Billing.css';
import CheckoutForm from './checkout';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { Card } from '../../../node_modules/@material-ui/core';
import { generateBreadCrumbs, refreshUser } from '../../actions';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import Styled from 'styled-components';

function mapStateToProps(state) {
    return {
        state,
    };
}

class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, type: 'monthly', value: 'monthly' };
    }

    componentDidMount() {
        // Checks for User to be Authenticated
        // If not authenticated it will send the user to <login/>
        // If authenticated it will set the state with the current user.
        if (!this.props.state.user.authenticated) {
            this.props.history.push('/rocket/auth');
        }
        this.props.generateBreadCrumbs(this.props.history.location.pathname);
    }
    handleChange = event => {
        this.setState({ value: event.target.value });
        this.handleTypeChange(event.target.value);
    };

    handleTypeChange = type => {
        this.setState({ type: type });
    };
    render() {
        return (
            <StripeProvider apiKey={`${process.env.REACT_APP_PUBLIC_KEY}`}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FormControl component="fieldset" className={`fieldset`}>
                        <header className="title10">Billing and Subscriptions</header>
                        <Card className="radioGroup">
                            <FormLabel component="legend" className="legend">
                                Add Premium Time
                            </FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender2"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel
                                    value="monthly"
                                    control={<Radio color="primary" />}
                                    label="1 Month"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="yearly"
                                    control={<Radio color="primary" />}
                                    label="1 Year"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                            <div>{`Total Cost: $${
                                this.state.type === 'monthly' ? 9.99 : 29.99
                            }`}</div>
                        </Card>
                    </FormControl>
                    <Elements>
                        <CheckoutForm
                            id={this.props.state.user._id}
                            uid={this.props.state.user.uid}
                            type={this.state.type}
                            refreshUser={this.props.refreshUser}
                        />
                    </Elements>
                </div>
            </StripeProvider>
        );
    }
}

export default connect(
    mapStateToProps,
    { generateBreadCrumbs, refreshUser }
)(Billing);
