import React from 'react';
import './Tarkov.css';
import eft1 from '../../images/eft1.png';
import eft2 from '../../images/eft2.png';
import eft3 from '../../images/eft3.png';
import eft4 from '../../images/eft4.png';
import eft5 from '../../images/eft5.png';
import eft6 from '../../images/eft6.png';
import { Link } from 'react-router-dom';

function Tarkov() {
  return (
    <div className="cards_game">
      <div className="cards_game__container">
        <div className="cards_game__container-title">
            <Link className="cards__game_link" to="/">
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="cards_game__arrow" d="M11.7338 18C10.945 18.0008 10.18 17.7572 9.56738 17.3101L1.06849 10.9957C0.735212 10.7569 0.46606 10.4535 0.281066 10.1081C0.0960718 9.76276 0 9.38429 0 9.00087C0 8.61746 0.0960718 8.23899 0.281066 7.89362C0.46606 7.54825 0.735212 7.24487 1.06849 7.00607L9.56738 0.691685C10.079 0.322712 10.6956 0.0905219 11.3467 0.0215753C11.9978 -0.0473713 12.6574 0.0496979 13.2502 0.301722C13.7655 0.506122 14.2044 0.83968 14.5147 1.26256C14.825 1.68544 14.9934 2.17976 15 2.68649V15.3153C14.9934 15.822 14.825 16.3163 14.5147 16.7392C14.2044 17.1621 13.7655 17.4956 13.2502 17.7C12.7738 17.895 12.2571 17.9972 11.7338 18V18Z" fill="white"/>
                </svg>
            </Link>
            <p className="cards_game__title">ESCAPE FROM TARKOV</p>
        </div>
        <div className="card_game__container">

        <div className="card_game">
            <Link className="card_game__link" to="/tarkov/neko">
            <img className="card_game__image" src={eft1} alt="ESCAPE FROM TARKOV" />
            <div className="card_game__wrapper">
                <p className="card_game__title">NEKO</p>
                <div className="card_game__wrap">
                    <p className="card_game__price">от 690₽</p>
                    <button className="card_game__button">Перейти</button>
                </div>
            </div>
            </Link>
        </div>

        <div className="card_game">
            <Link className="card_game__link" to="/tarkov/viking">
            <img className="card_game__image" src={eft2} alt="ESCAPE FROM TARKOV" />
            <div className="card_game__wrapper">
                <p className="card_game__title">VIKING</p>
                <div className="card_game__wrap">
                    <p className="card_game__price">от 690₽</p>
                    <button className="card_game__button">Перейти</button>
                </div>
            </div>
            </Link>
        </div>

        <div className="card_game">
            <Link className="card_game__link" to="/tarkov/titanium">
            <img className="card_game__image" src={eft3} alt="ESCAPE FROM TARKOV" />
            <div className="card_game__wrapper">
                <p className="card_game__title">TITANIUM LITE</p>
                <div className="card_game__wrap">
                    <p className="card_game__price">от 190₽</p>
                    <button className="card_game__button">Перейти</button>
                </div>
            </div>
            </Link>
        </div>

{/*
        <div className="card_game">
            <a className="card_game__link" href="/">
            <img className="card_game__image" src={eft4} alt="ESCAPE FROM TARKOV" />
            <div className="card_game__wrapper">
                <p className="card_game__title">VIKING 1 ДЕНЬ</p>
                <div className="card_game__wrap">
                    <p className="card_game__price">390₽</p>
                    <button className="card_game__button">КУПИТЬ</button>
                </div>
            </div>
            </a>
        </div> */}

        <div className="card_game">
            <Link className="card_game__link" to="/tarkov/millex">
            <img className="card_game__image" src={eft4} alt="ESCAPE FROM TARKOV" />
            <div className="card_game__wrapper">
                <p className="card_game__title">MILLEX TARKOV</p>
                <div className="card_game__wrap">
                    <p className="card_game__price">от 490₽</p>
                    <button className="card_game__button">Перейти</button>
                </div>
            </div>
            </Link>
        </div>
    {/*
        <div className="card_game">
            <a className="card_game__link" href="/">
            <img className="card_game__image" src={eft6} alt="ESCAPE FROM TARKOV" />
            <div className="card_game__wrapper">
                <p className="card_game__title">VIKING 7 ДНЕЙ</p>
                <div className="card_game__wrap">
                    <p className="card_game__price">1190₽</p>
                    <button className="card_game__button">КУПИТЬ</button>
                </div>
            </div>
            </a>
        </div> */}

        </div>
      </div>
    </div>
  );
}

export default Tarkov;