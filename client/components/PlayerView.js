import React, { Component } from 'react';
import socket from '../socket';
import axios from 'axios';
import WhiteCards from './WhiteCards';

class PlayerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cards: [],
      cards: [],
      numBlackCards: 0
    };
    console.log('constructor');
  }

  async componentDidMount() {
    // const cards = [0, 0, 0, 0, 0, 0, 0];
    const cards = [];
    for (let i = 0; i < 7; i++) {
      const res = await axios.get('https://api.kanye.rest');
      cards.push(res.data.quote);
    }
    this.setState({
      cards
    });
  }

  render() {
    const cards = this.state.cards;

    if (cards.length === 0) {
      return (
        <div className="ui segment">
          <p />
          <div className="ui active dimmer">
            <div className="ui loader" />
          </div>
        </div>
      );
    }

    return !this.props.judge ? (
      <WhiteCards cards={this.state.cards} submitCard={this.props.submitCard} />
    ) : (
      ''
    );
  }
}

export default PlayerView;
