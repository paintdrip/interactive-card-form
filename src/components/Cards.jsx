import React from 'react';

import cardlogo from '../assets/card-logo.svg';

const Cards = ({ cardData, name, date, cvc }) => {
  return (
    <div className="cards-component">
      <article className="front-card">
        <img src={cardlogo} alt="logo" className="card-logo" />
        <div>
          <h4 className="main-text">
            {cardData
              .replace(/\s/g, '')
              .replace(/(\d{4})/g, '$1 ')
              .trim()}
          </h4>
          <ul className="card-data">
            <li className="secondary-text">{name}</li>
            <li className="secondary-text">{date}</li>
          </ul>
        </div>
      </article>
      <article className="back-card">
        <p className="cvv-text">{cvc}</p>
      </article>
    </div>
  );
};

export default Cards;
