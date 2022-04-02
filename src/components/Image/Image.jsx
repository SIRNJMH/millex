import React from 'react';
import './Image.css';
import main__logo from '../../images/main__logo2.svg';

function Image() {
  return (
    <div className="image">
      <div className="image__container">
        {/* <img className="image__logo" src={main__logo} alt="Логотип Сайта" /> */}
        <div className="image__logo">
          <h1 className="image__title">Лучшие читы под разные игры</h1>
        </div>
      </div>
    </div>
  );
}

export default Image;