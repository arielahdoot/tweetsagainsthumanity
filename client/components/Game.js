import React, { Component } from 'react';
import PlayerView from './PlayerView';
import socket from '../socket';
import axios from 'axios';
import BlackCard from './BlackCard';
import WhiteCards from './WhiteCards';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isJudge: false,
      numPlayers: 0,
      cardsPlaced: [],
      currentBlackCard: '',
      name: '',
      numBlackCards: 0,
      submitted: false
    };
    this.updateBlackCard = this.updateBlackCard.bind(this);
    this.submitCard = this.submitCard.bind(this);
    this.selectWinningCard = this.selectWinningCard.bind(this);
  }

  submitCard(newCard, index) {
    newCard.index = index;
    const cards = [...this.state.cardsPlaced];
    cards.push(newCard);
    this.setState({
      cardsPlaced: cards,
      submitted: true
    });

    socket.emit('card submitted server', cards);
  }

  async updateBlackCard() {
    const id = this.state.currentBlackCard.id;
    await axios.put(`api/blackCards/${id}`);
    this.getCurrentBlackCard();
  }

  async getCurrentBlackCard() {
    const res = await axios.get('/api/blackCards');
    this.setState({
      currentBlackCard: res.data
    });
    socket.emit('update black card server', res.data);
  }

  selectWinningCard(winningCard) {
    socket.emit('victory server', winningCard, socket.id);
  }

  componentDidMount() {
    this.getCurrentBlackCard();

    socket.on('new round', () => {
      this.setState({
        cardsPlaced: [],
        submitted: false
      });
      this.updateBlackCard();
    });

    socket.on('victory', () => {
      this.setState(prevState => {
        return {
          numBlackCards: prevState.numBlackCards + 1
        };
      });
    });

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

    socket.on('no longer judge', () => {
      console.log('APPARENTLY I AM NO LONGER THE JUDGE', socket.id);
      this.setState({
        isJudge: false
      });
    });

    socket.on('update black card', data => {
      console.log('UPDATING BLACK CARD', socket.id, data);
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

  render() {
    console.log(
      this.state.numPlayers,
      this.state.cardsPlaced,
      this.state.cardsPlaced.length,
      this.state.isJudge
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
          <div>
            <h2>Wins: {this.state.numBlackCards}</h2>
            <BlackCard
              blackCard={this.state.currentBlackCard}
              isJudge={this.state.isJudge}
              updateBlackCard={this.updateBlackCard}
              judging={true}
            />
            <WhiteCards
              cards={this.state.cardsPlaced}
              submitCard={this.selectWinningCard}
              isJudge={this.state.isJudge}
              judging={true}
            />
            {!this.state.isJudge && (
              <div className="ui active centered inline text loader">
                Waiting for the judge
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2>Wins: {this.state.numBlackCards}</h2>
            <BlackCard
              blackCard={this.state.currentBlackCard}
              isJudge={this.state.isJudge}
              updateBlackCard={this.updateBlackCard}
              judging={false}
            />
            <PlayerView
              isJudge={this.state.isJudge}
              submitCard={this.submitCard}
              judging={false}
              submitted={this.state.submitted}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Game;
