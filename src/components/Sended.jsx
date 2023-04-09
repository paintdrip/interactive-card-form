import React from 'react';
import completeIcon from '../assets/icon-complete.svg';
import { setSent } from '../App';

const Sended = ({ setSent }) => {
  return (
    <>
      <div className="sentblock">
        <img src={completeIcon} alt="" className="sentblock-img"></img>
        <h1 className="sentblock-caption">THANK YOU!</h1>
        <p className="sentblock-description">We've added your card details</p>
        <button type="submit" className="sentblock-btn" onClick={() => setSent(false)}>
          Return
        </button>
      </div>
    </>
  );
};

export default Sended;
