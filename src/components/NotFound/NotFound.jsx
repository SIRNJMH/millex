import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__container">
        <div className="notfound__wrap">
            <h1 className="notfound__title">404</h1>
            <p className="notfound__subtitle">Page not found</p>
            <Link className="notfound__error" to="/"><button className="notfound__button">Go to home</button></Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;