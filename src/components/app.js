import React, { Component } from 'react';
import Wallet from './wallet';

export default class App extends Component {

  constructor(props) {
    super(props);
      this.state = {

      }
  }

  render() {
    return (
      <div className='app'>
        <Wallet />
      </div>
    );
  }
}
