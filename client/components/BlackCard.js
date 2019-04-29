import React from 'react';

const BlackCard = ({ blackCard, isJudge, updateBlackCard, judging }) => {
  return (
    <div>
      <div
        className="ui card centered"
        style={{ backgroundColor: '#000', marginBottom: '15px' }}
      >
        <div className="content">
          <div id="black-card">{blackCard.question}</div>
        </div>
        {isJudge &&
          !judging && (
            <div className="ui white button" onClick={updateBlackCard}>
              New Card
            </div>
          )}
      </div>
      {isJudge &&
        !judging && (
          <div className="ui active centered inline text loader">
            You are the judge, please wait for all the other cards to be
            submitted
          </div>
        )}
    </div>
  );
};

export default BlackCard;
