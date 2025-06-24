import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faHeart,
  faShoppingCart,
  faList,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './Navbar.css'; // Only for colors, font, and minor tweaks
import './CartBadge.css';
import { useCart } from '../../contexts/CartContext.jsx';
import NavAuthButtons from '../Auth/NavAuthButtons.jsx';

// Add icons to library
library.add(faSearch, faHeart, faShoppingCart, faList, faLanguage);

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { cartItemCount, recentlyUpdated } = useCart();
  const [animateCart, setAnimateCart] = React.useState(false);

  React.useEffect(() => {
    if (recentlyUpdated) {
      setAnimateCart(true);
      const timeout = setTimeout(() => {
        setAnimateCart(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [recentlyUpdated]);

  const toggleLanguage = () => {
    const newLang = isRTL ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    // Dynamically load the appropriate Bootstrap CSS
    const linkId = 'bootstrap-css';
    let link = document.getElementById(linkId);
    if (!link) {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = newLang === 'ar'
      ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css'
      : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
  };

  const categories = [
    { id: 'summerPlants', label: t('summerPlants') },
    { id: 'winterPlants', label: t('winterPlants') },
    { id: 'naturalGrass', label: t('naturalGrass') },
    { id: 'trees', label: t('trees') },
  ];
  const displayedCategories = isRTL ? categories : [...categories].reverse();

  return (
    <>
      <nav className="navbar navbar-expand-lg py-0 pt-4" >
        <div className="container-fluid px-3 px-md-5">
          {/* Logo & Toggler */}
          <NavLink to="/" className="navbar-brand p-0 me-3">
            <img
              className="MasaratcoLogo1"
              src="assets/images/logo.svg"
              alt="Masaratco Logo"
              style={{ height: 64 }}
            />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* NavLinks - Collapsible */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <div className="navbar-nav ms-lg-3 gap-lg-3">
              <NavLink to="/" className={({ isActive }) => `menu-link nav-link${isActive ? ' active' : ''}`}>{t('home')}</NavLink>
              <NavLink to="/products" className={({ isActive }) => `menu-link nav-link${isActive ? ' active' : ''}`}>{t('store')}</NavLink>
              <NavLink to="/landscape" className={({ isActive }) => `menu-link nav-link${isActive ? ' active' : ''}`}>{t('landscaping')}</NavLink>
              <NavLink to="/events" className={({ isActive }) => `menu-link nav-link${isActive ? ' active' : ''}`}>{t('event')}</NavLink>
              <NavLink to="/about" className={({ isActive }) => `menu-link nav-link${isActive ? ' active' : ''}`}>{t('about')}</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `menu-link nav-link${isActive ? ' active' : ''}`}>{t('contact')}</NavLink>
            </div>
          </div>
          {/* Icons & Auth */}
          <div className="d-flex align-items-center ms-auto gap-2">
            <NavLink to="/cart" className="icon-frame position-relative">
              <img src="assets/images/navCart.svg" alt="cart" />
              {cartItemCount > 0 && (
                <span className={`cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill ${animateCart ? 'animated' : ''}`}>{cartItemCount}</span>
              )}
            </NavLink>
            <NavLink to="/wishlist" className="icon-frame">
              <img src="assets/images/navFavorite.svg" alt="fav" />
            </NavLink>
            <NavAuthButtons />
            {/* <button className="icon-frame" onClick={toggleLanguage}>
              <img src="assets/images/lang.svg" alt="" />
            </button> */}
          </div>
        </div>
      </nav>
      {/* Categories Bar now outside the nav */}
      <div className="container-fluid px-3 px-md-5 border-top mt-2 pt-4 pb-2">
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <div className="d-flex align-items-center gap-2 px-2">
            <img
              className="categories-icon"
              src="assets/images/cat_icon.svg"
              alt="Categories Icon"
            />
            <div className="categories-label">{t('categories')}</div>
          </div>
          {displayedCategories.map((category) => (
            <div key={category.id} className="category-frame px-3 py-2">
              <div className="category-text">
                {category.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;