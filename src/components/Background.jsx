import React from 'react';
import bgMobile from '../assets/bg-main-mobile.png';
import bgDesktop from '../assets/bg-main-desktop.png';

const Background = () => {
  return (
    <div className="backgr">
      <picture>
        <source media="(min-width: 1024px)" srcSet={bgDesktop} />
        <img className="backgr-img" src={bgMobile} alt="" />
      </picture>
    </div>
  );
};

export default Background;
