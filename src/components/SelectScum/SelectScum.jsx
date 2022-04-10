import React from 'react';
import './SelectScum.css';
import scum from '../../images/scum1.png';
import eyes from '../../images/eyes.svg';
import aimbot from '../../images/aimbot.svg';
import misc from '../../images/misc.svg';
import loot from '../../images/loot.svg';
import { Link } from 'react-router-dom';

function SelectScum() {
  return (
    <div className="select">
      <div className="select__container">
      <div className="select__title_wrap">
            <Link className="cards__game_link" to="/scum">
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="cards_game__arrow" d="M11.7338 18C10.945 18.0008 10.18 17.7572 9.56738 17.3101L1.06849 10.9957C0.735212 10.7569 0.46606 10.4535 0.281066 10.1081C0.0960718 9.76276 0 9.38429 0 9.00087C0 8.61746 0.0960718 8.23899 0.281066 7.89362C0.46606 7.54825 0.735212 7.24487 1.06849 7.00607L9.56738 0.691685C10.079 0.322712 10.6956 0.0905219 11.3467 0.0215753C11.9978 -0.0473713 12.6574 0.0496979 13.2502 0.301722C13.7655 0.506122 14.2044 0.83968 14.5147 1.26256C14.825 1.68544 14.9934 2.17976 15 2.68649V15.3153C14.9934 15.822 14.825 16.3163 14.5147 16.7392C14.2044 17.1621 13.7655 17.4956 13.2502 17.7C12.7738 17.895 12.2571 17.9972 11.7338 18V18Z" fill="white"/>
                </svg>
            </Link>
            <p className="cards_game__title">MILLEX SCUM</p>
        </div>
        <div className="select__wrap">
            <img className="select__image" src={scum} alt="VALORANT" />
            <div className="select__line" />
        </div>
        <div className="select__wrapper">
            <div className="select__wrapper_functional">

            <div className="select__wrapper_function">
                <div className="select__wrapper_title">
                    <img className="select__logo" src={eyes} alt="eyes" />
                    <h2 className="select__title">ESP</h2>
                </div>
                <p className="select__text">— Box ESP</p>
                <p className="select__text">— Skelet ESP</p>
                <p className="select__text">— Snapline</p>
                <p className="select__text">— Zombie ESP</p>
                <p className="select__text">— Animal ESP</p>
                <p className="select__text">— Robot</p>
                <p className="select__text">— Chests</p>
                </div>

                <div className="select__wrapper_function">
                <div className="select__wrapper_title">
                    <img className="select__logo" src={aimbot} alt="aimbot" />
                    <h2 className="select__title">AIM</h2>
                </div>
                <p className="select__text">— Enable</p>
                <p className="select__text">— Draw Fov</p>
                <p className="select__text">— Smooth</p>
                <p className="select__text">— Fov</p>
                </div>

                <div className="select__wrapper_function">
                <div className="select__wrapper_title">
                    <img className="select__logo" src={misc} alt="misc" />
                    <h2 className="select__title">MiSC</h2>
                </div>
                <p className="select__text">— Godmode</p>
                <p className="select__text">— Infinity ammo</p>
                <p className="select__text">— Speedhack</p>
                <p className="select__text">— Super Jump</p>
                </div>

            </div>
            <div className="select__wrapper_prices">
                <h2 className="select__wrapper_undetect">UNDETECTED</h2>
                <a className="select__wrapper_link" href="https://millex.fun/payitem/53" target="_blank">
                    <div className="select__wrapper_prices-price">
                        <p className="select__wrapper_prices-day">1 день</p>
                        <p className="select__wrapper_prices-day">290₽</p>
                    </div>
                </a>
                
                <a className="select__wrapper_link" href="https://millex.fun/payitem/54" target="_blank">
                <div className="select__wrapper_prices-price">
                    <p className="select__wrapper_prices-day">7 дней</p>
                    <p className="select__wrapper_prices-day">1490₽</p>
                </div>
                </a>

                <a className="select__wrapper_link" href="https://millex.fun/payitem/55" target="_blank">
                    <div className="select__wrapper_prices-price">
                        <p className="select__wrapper_prices-day">30 дней</p>
                        <p className="select__wrapper_prices-day">2590₽</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SelectScum;