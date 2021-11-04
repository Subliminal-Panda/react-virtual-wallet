import React, { Component } from 'react';

export default class Wallet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            balance: 0,
        }
    }
    render() {
        return (
            <div className="wallet">
                <h1>Virtual Wallet App</h1>
                <h2>Your current balance: ${this.state.balance.toFixed(2)}</h2>
            </div>
        )
    }
}
