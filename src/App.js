import React from 'react';

import './scss/app.scss';
import bgMobile from './assets/bg-main-mobile.png';
import bgDesktop from './assets/bg-main-desktop.png';
import cardlogo from './assets/card-logo.svg';

function App() {
  return (
    <section>
      {/* Фоновое изображение */}
      <div className="backgr">
        <picture>
          <source media="(min-width: 1024px)" srcSet={bgDesktop} />
          <img className="backgr-img" src={bgMobile} alt="background image" />
        </picture>
      </div>
      <div className="App">
        {/* Компонент с картами */}
        <div className="cards-component">
          <article className="front-card">
            <img src={cardlogo} alt="logo" className="card-logo" />
            <div>
              <h4 className="main-text">0000 0000 0000 0000</h4>
              <ul className="card-data">
                <li className="secondary-text">ALEXANDER DANILIN</li>
                <li className="secondary-text">25/25</li>
              </ul>
            </div>
          </article>
          <article className="back-card">
            <p className="cvv-text">123</p>
          </article>
        </div>
        {/* Форма для заполнения */}
        <div className="form-block">
          <form className="typing-form">
            <div>
              <label htmlFor="cardholder_name">CARDHOLDER NAME</label>
              <input
                type="text"
                name="cardholder_name"
                id="cardholder_name"
                placeholder="e.g Jane Appleseed"
                required
              />
            </div>
            <div>
              <label htmlFor="card_number">CARD NUMBER</label>
              <input
                type="number"
                name="card_number"
                id="card_number"
                placeholder="e.g. 1234 5678 9123 0000"
                maxLength={19}
                required
              />
            </div>
            <article className="small-form-data">
              <div className="expdate-block">
                <label htmlFor="exp_date">EXP. DATE (MM/YY)</label>
                <input type="month" name="exp_date" id="exp_date" placeholder="MM" required />
              </div>
              <div className="expdate-block">
                <label htmlFor="card_number">CVC</label>
                <input
                  type="number"
                  name="card_number"
                  id="card_number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  maxLength={3}
                  required
                />
              </div>
            </article>
            <button type="submit" className="btn">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;