/* eslint-disable react/jsx-key */
import React from 'react';

const WhiteCards = ({ cards, submitCard, judging, isJudge }) => {
  return (
    <div className="ui stackable centered grid" style={{ marginLeft: '10px' }}>
      {cards.length > 0 &&
        cards.map((card, index) => {
          return (
            <div className="four wide column">
              <div
                className="ui card"
                style={{
                  border: '1px dashed #999'
                }}
              >
                <div className="content">
                  <div id="white-card">{card.tweet}</div>
                </div>
                {judging ? (
                  isJudge && (
                    <div
                      className="ui toggle button"
                      onClick={() => submitCard(card)}
                    >
                      Choose
                    </div>
                  )
                ) : (
                  <div
                    className="ui toggle button"
                    onClick={() => submitCard(card, index)}
                  >
                    Choose
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WhiteCards;
