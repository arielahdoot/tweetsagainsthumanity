import React, { Component } from 'react';
import socket from '../socket';
import axios from 'axios';

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
    const cards = [0, 0, 0, 0, 0, 0, 0];
    // for (let i = 0; i < 7; i++) {
    //   const res = await axios.get('https://api.kanye.rest');
    //   cards.push(res.data.quote);
    // }
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
    } else if (this.props.judge) {
      return (
        <div className="ui active centered inline text loader">
          You are the judge, please wait for all the other cards to be submitted
        </div>
      );
    }

    return (
      <div
        className="ui stackable centered grid"
        style={{ marginLeft: '10px' }}
      >
        {cards.length > 0 &&
          cards.map(card => {
            return (
              <div className="four wide column">
                <div
                  className="ui card"
                  style={{
                    border: '1px dashed #999'
                  }}
                >
                  <div className="content">
                    <div id="white-card">
                      Kristy is an art director living in New York.
                      WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                      WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                      WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                    </div>
                  </div>
                  <div className="ui toggle button">Choose</div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default PlayerView;
