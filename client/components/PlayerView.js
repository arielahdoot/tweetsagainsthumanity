import React, { Component } from 'react';
import socket from '../socket';
import axios from 'axios';
import WhiteCards from './WhiteCards';

class PlayerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    this.getNewCard = this.getNewCard.bind(this);
  }

  async getNewCard(index) {
    const quotes = this.state.cards.map(card => card.tweet);
    let res = await axios.get('https://api.kanye.rest');
    let newTweet = res.data.quote;
    while (quotes.includes(newTweet)) {
      newTweet = await axios.get('https://api.kanye.rest');
    }
    this.setState(prevState => ({
      cards: prevState.cards
        .filter(card => card.index !== index)
        .concat([{ tweet: newTweet, owner: socket.id, index: -1 }])
    }));
  }

  async componentDidMount() {
    // const cards = [
    //   { tweet: 1, owner: socket.id, index: -1 },
    //   { tweet: 2, owner: socket.id, index: -1 },
    //   { tweet: 3, owner: socket.id, index: -1 },
    //   { tweet: 4, owner: socket.id, index: -1 },
    //   { tweet: 5, owner: socket.id, index: -1 },
    //   { tweet: 6, owner: socket.id, index: -1 },
    //   { tweet: 7, owner: socket.id, index: -1 }
    // ];
    const quotes = [];
    const cards = [];
    for (let i = 0; i < 7; i++) {
      const res = await axios.get('https://api.kanye.rest');
      if (!quotes.includes(res.data.quote)) {
        cards.push({ tweet: res.data.quote, owner: socket.id, index: -1 });
        quotes.push(res.data.quote);
      } else {
        i--;
      }
    }
    this.setState({
      cards
    });

    socket.on('get new card', index => {
      console.log(this.props);
      if (!this.props.isJudge) {
        this.getNewCard(index);
      }
    });
  }

  render() {
    const cards = this.state.cards;

    console.log('CARDS', cards);

    const { submitCard, judging, isJudge, submitted } = this.props;

    if (cards.length === 0) {
      return (
        <div className="ui active centered inline text loader">Loading</div>
      );
    }

    return !isJudge
      ? !submitted && (
          <WhiteCards
            cards={this.state.cards}
            submitCard={submitCard}
            isJudge={isJudge}
            judging={judging}
          />
        )
      : '';
  }
}

export default PlayerView;
