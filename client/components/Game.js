import React, { Component } from 'react';
import PlayerView from './PlayerView';
import socket from '../socket';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judge: '',
      numPlayers: 0,
      cardsPlaced: [],
      name: ''
    };
  }
  render() {
    console.log(this.props.user);
    return (
      <div>
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
                <div
                  style={{
                    overflowWrap: 'break-word',
                    color: '#fff',
                    fontWeight: 'bold',
                    minWidth: '4.32cm',
                    minHeight: '10cm',
                    fontSize: '1.25em',
                    textAlign: 'left',
                    verticalAlign: 'top',
                    backgroundColor: '#000'
                    // display: 'inline-block',
                    // margin: '0'
                  }}
                >
                  Kristy is an art director living in New York.
                  WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                  WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                  WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                </div>
              </div>
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
