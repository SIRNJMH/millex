import React from 'react';
import './Cards.css';
import { Link } from "react-router-dom";
import apex from "../../images/apex.png";
import eft from "../../images/eft.png";
import val from '../../images/val.png';
import fort from '../../images/fort.png';
import rust from '../../images/rust.png';
import spoof from '../../images/spoof.png';
import soon from '../../images/soon.png';


function Cards() {
  return (
    <div className="cards" id="game">
      <div className="cards__container">
        <p className="cards__title"><span className="cards__title_color">Популярные</span> игры</p>
        <div className="card__container">

            <div className="card">
                <Link className="card__link" to="/apex">
                <img className="card__image" src={apex} alt="APEX" />
                <div className="card__wrapper">
                    <p className="card__title">APEX LEGENDS</p>
                    <div className="card__wrap">
                        <p className="card__price">от 89₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/tarkov">
                <img className="card__image" src={eft} alt="EFT" />
                <div className="card__wrapper">
                    <p className="card__title">ESCAPE FROM TARKOV</p>
                    <div className="card__wrap">
                        <p className="card__price">от 190₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/valorant">
                <img className="card__image" src={val} alt="VALORANT" />
                <div className="card__wrapper">
                    <p className="card__title">VALORANT</p>
                    <div className="card__wrap">
                        <p className="card__price">от 440₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/fortnite">
                <img className="card__image" src={fort} alt="FORTNITE" />
                <div className="card__wrapper">
                    <p className="card__title">FORTNITE</p>
                    <div className="card__wrap">
                        <p className="card__price">от 290₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/rust">
                <img className="card__image" src={rust} alt="RUST" />
                <div className="card__wrapper">
                    <p className="card__title">RUST</p>
                    <div className="card__wrap">
                        <p className="card__price">от 290₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/spoofer">
                <img className="card__image" src={spoof} alt="SPOOFER" />
                <div className="card__wrapper">
                    <p className="card__title">SPOOFER</p>
                    <div className="card__wrap">
                        <p className="card__price">от 1990₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/spoofer">
                <img className="card__image" src={soon} alt="SOON" />
                <div className="card__wrapper">
                    <p className="card__title">CARD SLEEP</p>
                    {/* <div className="card__wrap">
                        <p className="card__price">от 1290₽</p>
                        <button className="card__button">Перейти</button>
                    </div> */}
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/spoofer">
                <img className="card__image" src={soon} alt="SOON" />
                <div className="card__wrapper">
                    <p className="card__title">CARD SLEEP</p>
                    {/* <div className="card__wrap">
                        <p className="card__price">от 1290₽</p>
                        <button className="card__button">Перейти</button>
                    </div> */}
                </div>
                </Link>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Cards;