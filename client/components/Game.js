import React, { Component } from 'react';
import PlayerView from './PlayerView';
import socket from '../socket';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isJudge: false,
      numPlayers: 0,
      cardsPlaced: [],
      name: ''
    };
    this.handleQuit = this.handleQuit.bind(this);
  }
  componentDidMount() {
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
      socket.emit('claimed judge');
      this.setState({
        isJudge: true
      });
    });
    socket.on('not judge', () => {
      console.log(' NOT THE JUDGE', socket.id);
      this.setState({
        isJudge: false
      });
    });

    socket.on('test', function() {
      console.log('HEREEEEEEEEEEEEE');
    });
  }
  handleQuit() {
    if (this.state.isJudge) {
      console.log(socket);
      socket.emit('free judge');
    }
  }
  render() {
    console.log('AM I THE JUDGE?: ', this.state.isJudge);
    return (
      <div>
        {this.state.isJudge && <button onClick={this.handleQuit}>Quit</button>}
        {this.state.numPlayers &&
        this.state.cardsPlaced.length > 0 &&
        this.state.cardsPlaced === this.state.numPlayers - 1 ? (
          <h1>SHOW ME ALL THE SUBMITTED CARDS</h1>
        ) : (
          <div>
            <h1> SHOW ME THE ONE BLACK CARD</h1>
            <div
              className="ui card centered"
              style={{ backgroundColor: '#000', marginBottom: '15px' }}
            >
              <div className="content">
                <div id="black-card">
                  Kristy is an art director living in New York.
                  WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                  WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                  WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                </div>
              </div>
              <div class="ui white button">Reset</div>
            </div>
          </div>
        )}
        {/* Render the list of messages */
        this.state.cardsPlaced.map(message => <li>{message}</li>)}

        <PlayerView />
      </div>
    );
  }
}

export default Game;
