import React from 'react';

const Form = ({ setName, setCardData, setDate, setCvc, setSent }) => {
  return (
    <form className="typing-form">
      <div>
        <label htmlFor="cardholder_name">CARDHOLDER NAME</label>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          maxlength="16"
          name="cardholder_name"
          id="cardholder_name"
          placeholder="e.g Jane Appleseed"
          required
        />
      </div>
      <div>
        <label htmlFor="card_number">CARD NUMBER</label>
        <input
          onChange={(event) => setCardData(event.target.value)}
          type="number"
          onInput={(e) => (e.target.value = e.target.value.slice(0, 16))}
          name="card_number"
          id="card_number"
          placeholder="e.g. 1234 5678 9123 0000"
          required
        />
      </div>
      <article className="small-form-data">
        <div className="expdate-block">
          <label htmlFor="exp_date">EXP. DATE (MM/YY)</label>
          <input
            onChange={(event) => setDate(event.target.value)}
            type="month"
            name="exp_date"
            id="exp_date"
            placeholder="MM"
            required
          />
        </div>
        <div className="expdate-block">
          <label htmlFor="card_number">CVC</label>
          <input
            onChange={(event) => setCvc(event.target.value)}
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
            name="card_number"
            id="card_number"
            placeholder="e.g. 123"
            required
          />
        </div>
      </article>
      <button type="submit" className="btn" onClick={() => setSent(true)}>
        Confirm
      </button>
    </form>
  );
};

export default Form;
