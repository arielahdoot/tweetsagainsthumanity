import React, { Component } from 'react';
import socket from '../socket';
import axios from 'axios';
import WhiteCards from './WhiteCards';

class PlayerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cards: [],
      cards: []
    };
  }

  async componentDidMount() {
    // const cards = [1, 2, 3, 4, 5, 6, 7];
    const cards = [];
    for (let i = 0; i < 7; i++) {
      const res = await axios.get('https://api.kanye.rest');
      cards.push({ tweet: res.data.quote, owner: socket.id });
    }
    this.setState({
      cards
    });
  }

  render() {
    const cards = this.state.cards;

    const { submitCard, judging, isJudge } = this.props;

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

    return !isJudge ? (
      <WhiteCards
        cards={this.state.cards}
        submitCard={submitCard}
        isJudge={isJudge}
        judging={judging}
      />
    ) : (
      ''
    );
  }
}

export default PlayerView;
