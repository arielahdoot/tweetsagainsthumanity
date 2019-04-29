import React from 'react';

const WhiteCards = ({ cards, submitCard }) => {
  return (
    <div className="ui stackable centered grid" style={{ marginLeft: '10px' }}>
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
                <div
                  className="ui toggle button"
                  onClick={() => submitCard(card)}
                >
                  Choose
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WhiteCards;
