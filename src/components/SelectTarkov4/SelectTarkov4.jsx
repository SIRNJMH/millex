import React from 'react';
import './SelectTarkov4.css';
import tarkov from '../../images/tarkovsel2.png';
import eyes from '../../images/eyes.svg';
import aimbot from '../../images/aimbot.svg';
import misc from '../../images/misc.svg';
import loot from '../../images/loot.svg';
import { Link } from 'react-router-dom';

function SelectTarkov4() {
  return (
    <div className="select">
      <div className="select__container">
      <div className="select__title_wrap">
            <Link className="cards__game_link" to="/tarkov">
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="cards_game__arrow" d="M11.7338 18C10.945 18.0008 10.18 17.7572 9.56738 17.3101L1.06849 10.9957C0.735212 10.7569 0.46606 10.4535 0.281066 10.1081C0.0960718 9.76276 0 9.38429 0 9.00087C0 8.61746 0.0960718 8.23899 0.281066 7.89362C0.46606 7.54825 0.735212 7.24487 1.06849 7.00607L9.56738 0.691685C10.079 0.322712 10.6956 0.0905219 11.3467 0.0215753C11.9978 -0.0473713 12.6574 0.0496979 13.2502 0.301722C13.7655 0.506122 14.2044 0.83968 14.5147 1.26256C14.825 1.68544 14.9934 2.17976 15 2.68649V15.3153C14.9934 15.822 14.825 16.3163 14.5147 16.7392C14.2044 17.1621 13.7655 17.4956 13.2502 17.7C12.7738 17.895 12.2571 17.9972 11.7338 18V18Z" fill="white"/>
                </svg>
            </Link>
            <p className="cards_game__title">NEKO</p>
        </div>
        <div className="select__wrap">
            <img className="select__image" src={tarkov} alt="APEX SELECT" />
            <div className="select__line" />
        </div>
        <div className="select__wrapper">
            <div className="select__wrapper_functional">
                <div className="select__wrapper_function">
                <div className="select__wrapper_title">
                    <img className="select__logo" src={eyes} alt="esp" />
                    <h2 className="select__title">ESP</h2>
                </div>
                <p className="select__text">— Visuals Enabled</p>
                <p className="select__text">— Whitelist Teammates</p>
                <p className="select__text">— Players</p>
                <p className="select__text">— Scavs</p>
                <p className="select__text">— Box</p>
                <p className="select__text">— Name</p>
                <p className="select__text">— Chams</p>
                <p className="select__text">— Healthbar</p>
                <p className="select__text">— Health text</p>
                <p className="select__text">— Weapon name</p>
                <p className="select__text">— Level</p>
                <p className="select__text">— KD</p>
                <p className="select__text">— Skeleton</p>
                <p className="select__text">— Skeleton outline</p>
                <p className="select__text">— Snapline</p>
                </div>
                <div className="select__wrapper_function">
                <div className="select__wrapper_title">
                    <img className="select__logo" src={aimbot} alt="aimbot" />
                    <h2 className="select__title">AIM</h2>
                </div>
                <p className="select__text">— Aim Assist Mode</p>
                <p className="select__text">— Aimbot</p>
                <p className="select__text">— Aim at visible players only</p>
                <p className="select__text">— Aimbot Key</p>
                <p className="select__text">— Reflect</p>
                <p className="select__text">— Manipulation</p>
                <p className="select__text">— Hitspot (Head, Cheats, Bone)</p>
                <p className="select__text">— Max distance</p>
                </div>
                <div className="select__wrapper_function">
                <div className="select__wrapper_title">
                    <img className="select__logo" src={loot} alt="loot" />
                    <h2 className="select__title">LOOT</h2>
                </div>
                <p className="select__text">— Visuals Enabled</p>
                <p className="select__text">— Items</p>
                <p className="select__text">— Medical items</p>
                <p className="select__text">— Weapons</p>
                <p className="select__text">— Food Items</p>
                <p className="select__text">— Weapon Mod Items</p>
                <p className="select__text">— Quest Items</p>
                <p className="select__text">— Min item value</p>
                <p className="select__text">— Min price per slot</p>
                <p className="select__text">— Max item distance</p>
                <p className="select__text">— Containers</p>
                <p className="select__text">— Corpses</p>
                <p className="select__text">— Grenades</p>
                <p className="select__text">— Extract points</p>
                </div>
                <div className="select__wrapper_function">
                <div className="select__wrapper_title">
                    <img className="select__logo" src={misc} alt="misc" />
                    <h2 className="select__title">MISC</h2>
                </div>
                <p className="select__text">— Time changer</p>
                <p className="select__text">— Bunny Hop</p>
                <p className="select__text">— High Jump</p>
                <p className="select__text">— Fast load | Unload Mag</p>
                <p className="select__text">— Instant Search</p>
                <p className="select__text">— Instant Exmine</p>
                <p className="select__text">— No Inertia</p>
                <p className="select__text">— No Overhead</p>
                <p className="select__text">— No Jam</p>
                <p className="select__text">— Bullet Speed Modifier</p>
                <p className="select__text">— Loot through walls</p>
                <p className="select__text">— Use loot esp minimum price</p>
                <p className="select__text">— Remove physical conditions</p>
                <p className="select__text">— No Visor</p>
                <p className="select__text">...and etc</p>
                {/* <p className="select__text">— Thermal Vision</p>
                <p className="select__text">— Night Vision</p>
                <p className="select__text">— Remove aim modifiers</p>
                <p className="select__text">— No Sway</p>
                <p className="select__text">— Infinite stamina</p>
                <p className="select__text">— Spawn amongus</p>
                <p className="select__text">— Bullet tracers</p>
                <p className="select__text">— Hitmarker</p>
                <p className="select__text">— Buffed Max Weight</p>
                <p className="select__text">— Enable WalkOnAir</p>
                <p className="select__text">— Enable TeleportToEnemy</p> */}
                </div>
            </div>
            <div className="select__wrapper_prices">
                <a className="select__wrapper_link" href="https://www.millex.fun/payitem/7" target="_blank">
                    <div className="select__wrapper_prices-price">
                        <p className="select__wrapper_prices-day">1 день</p>
                        <p className="select__wrapper_prices-day">690₽</p>
                    </div>
                </a>
                
                <a className="select__wrapper_link" href="https://www.millex.fun/payitem/8" target="_blank">
                <div className="select__wrapper_prices-price">
                    <p className="select__wrapper_prices-day">3 дня</p>
                    <p className="select__wrapper_prices-day">1490₽</p>
                </div>
                </a>

                <a className="select__wrapper_link" href="https://www.millex.fun/payitem/9" target="_blank">
                    <div className="select__wrapper_prices-price">
                        <p className="select__wrapper_prices-day">7 дней</p>
                        <p className="select__wrapper_prices-day">2990₽</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SelectTarkov4;