import React, { Component } from 'react';
import PlayerView from './PlayerView';
import socket from '../socket';
import axios from 'axios';

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
  }

  async getCurrentBlackCard() {
    const res = await axios.get('/api/blackCards');
    this.setState({
      currentBlackCard: res.data
    });
    socket.emit('update black card server', this.state.currentBlackCard);
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
  }

  async updateBlackCard() {
    const id = this.state.currentBlackCard.id;
    await axios.put(`api/blackCards/${id}`);
    this.getCurrentBlackCard();
  }

  render() {
    const blackCard = this.state.currentBlackCard;
    if (!blackCard) {
      return (
        <div className="ui segment">
          <p />
          <div className="ui active dimmer">
            <div className="ui loader" />
          </div>
        </div>
      );
    }
    return (
      <div>
        {this.state.numPlayers &&
        this.state.cardsPlaced.length > 0 &&
        this.state.cardsPlaced === this.state.numPlayers - 1 ? (
          <h2>SHOW ME ALL THE SUBMITTED CARDS</h2>
        ) : (
          <div>
            <h2> SHOW ME THE ONE BLACK CARD</h2>
            <div
              className="ui card centered"
              style={{ backgroundColor: '#000', marginBottom: '15px' }}
            >
              <div className="content">
                <div id="black-card">{blackCard.question}</div>
              </div>
              {this.state.isJudge && (
                <div className="ui white button" onClick={this.updateBlackCard}>
                  New Card
                </div>
              )}
            </div>
          </div>
        )}
        {/* Render the list of messages */
        this.state.cardsPlaced.map(message => <li>{message}</li>)}

        <PlayerView judge={this.state.isJudge} />
      </div>
    );
  }
}

export default Game;
