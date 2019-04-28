import React, { Component } from 'react';
import socket from '../socket';
import axios from 'axios';

class PlayerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cards: [],
      cards: [0, 0, 0, 0, 0, 0, 0],
      numBlackCards: 0
    };
  }

  async componentDidMount() {
    // const cards = [];
    // for (let i = 0; i < 7; i++) {
    //   const res = await axios.get('https://api.kanye.rest');
    //   cards.push(res.data.quote);
    // }
    // this.setState({
    //   cards
    // });
  }

  render() {
    console.log(socket);
    const cards = this.state.cards;
    return (
      <div
        className="ui stackable centered grid"
        style={{ marginLeft: '10px' }}
      >
        {cards.length &&
          cards.map(card => {
            return (
              <div className="four wide column">
                <div
                  class="ui card"
                  style={{
                    border: '1px dashed #999'
                  }}
                >
                  <div class="content">
                    <div id="white-card">
                      Kristy is an art director living in New York.
                      WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                      WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                      WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                    </div>
                  </div>
                  <div class="ui toggle button">Choose</div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default PlayerView;
