import React, { Component } from 'react';
import PlayerView from './PlayerView';
import socket from '../socket';
import axios from 'axios';
import { runInThisContext } from 'vm';
import { timingSafeEqual } from 'crypto';
import BlackCard from './BlackCard';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isJudge: false,
      numPlayers: 0,
      cardsPlaced: [],
      currentBlackCard: '',
      name: ''
    };
    this.updateBlackCard = this.updateBlackCard.bind(this);
    this.submitCard = this.submitCard.bind(this);
  }

  submitCard(newCard) {
    console.log('NEWCARD FRONT-END', newCard);
    const cards = [...this.state.cardsPlaced];
    cards.push(newCard);
    console.log(cards);
    this.setState({
      cardsPlaced: cards
    });

    socket.emit('card submitted server', cards);
  }

  async getCurrentBlackCard() {
    const res = await axios.get('/api/blackCards');
    this.setState({
      currentBlackCard: res.data
    });
  }

  componentDidMount() {
    this.getCurrentBlackCard();

    socket.on(
      'judge',
      function() {
        console.log('INITIALLY I AM THE JUDGE', socket.id);
        this.setState({
          isJudge: true
        });
      }.bind(this)
    );
    socket.on('open judge', () => {
      console.log('APPARENTLY I AM NOW THE JUDGE', socket.id);
      this.setState({
        isJudge: true
      });
    });

    socket.on('update black card', data => {
      console.log('UPDATING BLACK CARD', socket.id);
      this.setState({
        currentBlackCard: data
      });
    });

    socket.on('new player', data => {
      console.log('UPDATING NUMBER OF PLAYERS', socket.id);
      this.setState({
        numPlayers: data
      });
    });

    socket.on('card submitted', data => {
      console.log('UPDATING CARDS SUBMITTED', socket.id);
      this.setState({
        cardsPlaced: data
      });
    });
  }

  async updateBlackCard() {
    const id = this.state.currentBlackCard.id;
    await axios.put(`api/blackCards/${id}`);
    this.getCurrentBlackCard();
    socket.emit('update black card server', this.state.currentBlackCard);
  }

  render() {
    console.log(
      this.state.numPlayers,
      this.state.cardsPlaced,
      this.state.cardsPlaced.length
    );
    const blackCard = this.state.currentBlackCard;
    if (!blackCard) {
      return (
        <div className="ui active centered inline text loader">Loading</div>
      );
    }
    return (
      <div>
        {this.state.numPlayers &&
        this.state.cardsPlaced.length > 0 &&
        this.state.cardsPlaced.length === this.state.numPlayers - 1 ? (
          <h2>SHOW ME ALL THE SUBMITTED CARDS</h2>
        ) : (
          <div>
            <h2> SHOW ME THE ONE BLACK CARD</h2>
            <BlackCard
              blackCard={this.state.currentBlackCard}
              isJudge={this.state.isJudge}
              updateBlackCard={this.updateBlackCard}
            />
          </div>
        )}

        <PlayerView judge={this.state.isJudge} submitCard={this.submitCard} />
      </div>
    );
  }
}

export default Game;
