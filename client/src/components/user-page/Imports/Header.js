import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="header__top__left">
                <p>Free shipping, 30-day return or refund guarantee.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="header__top__right">
                <div className="header__top__links">
                  <a href="#">Sign in</a>
                  <a href="#">FAQs</a>
                </div>
                <div className="header__top__hover">
                  <span>Usd <i className="arrow_carrot-down"></i></span>
                  <ul>
                    <li>USD</li>
                    <li>EUR</li>
                    <li>USD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="header__logo">
              <a href="/"><img src="http://localhost:8081/mf_img/logo.png" alt="" /></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <nav className="header__menu mobile-menu">
              <ul>
                <li className={splitLocation[1] === "" ? "active" : ""}><a href="/">Home</a></li>
                <li className={(splitLocation[1] === "shop") ? "active" : ""}><a href="/shop">Shop</a></li>
                <li><a href="#">Pages</a>
                  <ul className="dropdown">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/shop-details">Shop Details</a></li>
                    <li><a href="/shoping-cart">Shopping Cart</a></li>
                    <li><a href="/checkout">Check Out</a></li>
                    <li><a href="/blog-details">Blog Details</a></li>
                  </ul>
                </li>
                <li className={splitLocation[1] === "blog" ? "active" : ""}><a href="/blog">Blog</a></li>
                <li className={splitLocation[1] === "contact" ? "active" : ""} ><a href="/contact">Contacts</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="header__nav__option">
              <a href="#" className="search-switch"><img src="http://localhost:8081/mf_img/icon/search.png" alt="" /></a>
              <a href="#"><img src="http://localhost:8081/mf_img/icon/heart.png" alt="" /></a>
              <a href="#"><img src="http://localhost:8081/mf_img/icon/cart.png" alt="" /> <span>0</span></a>
              <div className="price">$0.00</div>
            </div>
          </div>
        </div>
        <div className="canvas__open"><i className="fa fa-bars"></i></div>
      </div>
    </header>
  )
}

export default Header;