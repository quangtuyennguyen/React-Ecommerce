import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as actions from '../../../actions';
import Loading from '../../../assets/images/loading-search.gif';
import { CATEGORIES, LINKS, TIMER_VALUES } from '../../../constants';
import { auth } from '../../../services/firebase';
import { countTotalPrice, formatter } from '../../../utils';
import useClickOutside from '../../../utils/useClickOutside';
import useEscKeydown from '../../../utils/useEscKeydown';
import SignIn from '../../Auth/SignIn';
import SearchList from '../../SearchList';
import CartSideBar from '../../Sidebars/CartSideBar';
import NavMobileSideBar from '../../Sidebars/MobileSidebar';

Navbar.propTypes = {
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  searchProduct: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
};

Navbar.defaultProps = {
  userInfo: {},
  searchValue: '',
};

function Navbar({
  userInfo,
  showModal,
  searchProduct,
  searchValue,
  hideModal,
}) {
  const searchBoxRef = useRef();
  const searchWrapper = useRef();
  const navBarRef = useRef();
  const searchIconRef = useRef();
  const inputRef = useRef();
  const [expandMenu, setExpandMenu] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { displayName } = userInfo;
  const [isOpenSearchMobile, setIsOpenSearchMobile] = useState(false);

  const state = JSON.parse(localStorage.getItem('carts')) || [];
  const history = useHistory();
  const { pathname } = history.location;

  const renderCategories = () =>
    _.map(CATEGORIES, ({ category, image, widgets }) => (
      <div key={category} className="nav__dropdown-item">
        <Link to={`/product-category/${_.kebabCase(category)}`}>
          <img src={image} alt={category} className="nav__dropdown-img" />
          <h5 className="nav__dropdown-title">{category}</h5>
        </Link>
        <ul className="widget">
          {_.map(widgets, widget => (
            <li key={widget} className="widget__item">
              {widget}
            </li>
          ))}
        </ul>
      </div>
    ));

  const renderLink = () => {
    const setActiveClass = (name, path) => {
      if (pathname === path) {
        return ' nav__link--active';
      } else if (
        name.toLowerCase() === 'shop' &&
        ['product', 'product-category'].includes(pathname.split('/')[1])
      ) {
        return ' nav__link--active';
      } else if (name.toLowerCase() === 'blog' && pathname.includes('/blog')) {
        return ' nav__link--active';
      } else {
        return '';
      }
    };

    const handleHideModal = () => {
      if (window.innerWidth <= 900) hideModal();
    };

    return _.map(LINKS, ({ name, path }) => (
      <li onClick={handleHideModal} key={path} className="nav__item">
        <Link to={path} className={`nav__link${setActiveClass(name, path)}`}>
          {name}
        </Link>
      </li>
    ));
  };

  const countQuantity = () =>
    _.reduce(state, (a, { quantity }) => a + quantity, 0);

  const handleSearchProduct = ({ target: { value } }) => {
    if (value) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, TIMER_VALUES.sub);
    } else {
      setIsLoading(false);
    }
    setShowResult(true);
    searchProduct(value);
  };

  const handleShowModal = () => {
    if (displayName) {
      auth.signOut();
      toast.success('One moment please...', {
        onClose: () => window.location.reload(),
        autoClose: 1500,
      });
    } else {
      showModal(<SignIn />);
    }
  };

  useClickOutside(searchBoxRef, searchWrapper, () => {
    setShowResult(false);
  });

  useEscKeydown(() => {
    setShowResult(false);
    setIsOpenSearchMobile(false);
  });

  const handelSubmit = event => {
    event.preventDefault();
  };

  const toggleSearchIcon = () => {
    setIsOpenSearchMobile(!isOpenSearchMobile);
  };

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Fragment>
      <div
        ref={navBarRef}
        className="navbar navbar--desktop"
        id="navbarDesktop"
      >
        <div className="action-bar">
          <div className="row u-padding-top-small u-padding-bottom-small">
            <div className="col span_1_of_8">
              <div className="action-bar__logo">
                <a href="/">
                  <img
                    className="action-bar__img"
                    src="https://res.cloudinary.com/shopping-assets/image/upload/v1584263975/logo_lrcmli.png"
                    alt="Logo"
                  />
                </a>
              </div>
            </div>
            {window.innerWidth > 900 && (
              <div
                ref={searchWrapper}
                className="col span_5_of_8"
                style={{ position: 'relative' }}
              >
                <form className="form" onSubmit={handelSubmit}>
                  <input
                    onChange={handleSearchProduct}
                    className="form__input"
                    type="text"
                    name="q"
                    placeholder="Search for products"
                    autoComplete="off"
                    ref={inputRef}
                  />
                  {isLoading && (
                    <img
                      className="loading__image-small"
                      src={Loading}
                      alt=""
                    />
                  )}
                  <i className="fas fa-search" />
                </form>
                {searchValue && showResult ? (
                  <SearchList
                    searchBoxRef={searchBoxRef}
                    searchValue={searchValue}
                    showResult={showResult}
                    setShowResult={setShowResult}
                  />
                ) : null}
              </div>
            )}
            <div className="col span_2_of_8">
              <div className="row-fluid">
                <div className="col span_1_of_2">
                  <div className="action-bar__box-content">
                    <i
                      onClick={() => setExpandMenu(!expandMenu)}
                      className={`${
                        expandMenu
                          ? 'far fa-times-circle u-d-none u-suggest'
                          : 'fas fa-bars u-d-none u-suggest'
                      }`}
                    />
                    <Link to="/wishlist">
                      <i className="far fa-heart u-suggest" />
                    </Link>
                    <div
                      onClick={handleShowModal}
                      className="action-bar__content"
                    >
                      <div className="action-bar__content-left">
                        <i className="far fa-user" />
                      </div>
                      <div className="action-bar__content-right">
                        <span className="action-bar__text--sub">{`${
                          displayName ? 'Hello, Sign out' : 'Hello, Sign in'
                        }`}</span>
                        <span className="action-bar__text--main">{`${
                          displayName ? _.capitalize(displayName) : 'My account'
                        }`}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col span_1_of_2">
                  <div
                    onClick={() => showModal(<CartSideBar />)}
                    className="action-bar__box-content"
                  >
                    <div className="action-bar__content">
                      <div className="action-bar__content-left">
                        <i className="fas fa-cart-plus" />
                        {state.length ? (
                          <span className="action-bar__cart">
                            {countQuantity()}
                          </span>
                        ) : null}
                      </div>
                      <div className="action-bar__content-right">
                        <span className="action-bar__text--sub">My cart</span>
                        <span className="action-bar__text--main">
                          {formatter.format(countTotalPrice(state))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className={`nav${expandMenu ? ' show' : ''}`} id="navDesktop">
          <div className="row">
            <div className="col span_1_of_8">
              <div className="nav__categories">
                <a href="/" className="nav__link">
                  <i className="fas fa-th-large" />
                  All Categories
                </a>
                <div className="nav__dropdown">{renderCategories()}</div>
              </div>
            </div>
            <div className="col span_7_of_8">
              <ul className="nav__list">{renderLink()}</ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="navbar navbar--mobile" id="navbarMobile">
        <div className="row">
          <div className="col span_1_of_3">
            <div className="icon-show-sidebar">
              <i
                onClick={() =>
                  showModal(
                    <NavMobileSideBar
                      renderLink={renderLink}
                      hideModal={hideModal}
                      showModal={showModal}
                      displayName={displayName}
                    />,
                  )
                }
                className="fas fa-bars"
              />
            </div>
          </div>
          <div className="col span_1_of_3">
            <div className="action-bar__logo action-bar__logo--mobile">
              <a href="/">
                <img
                  className="action-bar__img"
                  src="https://res.cloudinary.com/shopping-assets/image/upload/v1584263975/logo_lrcmli.png"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
          <div className="col span_1_of_3">
            <div className="box-icons">
              <Link to="/wishlist">
                <i
                  style={{ fontSize: '2rem', margin: '0 0.8rem' }}
                  className="far fa-heart"
                />
              </Link>
              <i
                style={{ fontSize: '2rem' }}
                ref={searchIconRef}
                onClick={() => toggleSearchIcon()}
                className={`${
                  isOpenSearchMobile
                    ? 'fas fa-search-minus'
                    : 'fas fa-search-plus'
                }`}
              />
              <Link to="/cart">
                <div className="action-bar__content-left">
                  <i className="fas fa-cart-plus" />
                  {state.length ? (
                    <span className="action-bar__cart">{countQuantity()}</span>
                  ) : null}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row u-padding-none">
          {window.innerWidth <= 900 && isOpenSearchMobile && (
            <div ref={searchWrapper} className="box-search" id="searchWrapper">
              <form className="form" onSubmit={handelSubmit}>
                <input
                  onChange={handleSearchProduct}
                  className="form__input"
                  type="text"
                  name="q"
                  placeholder="Search for products"
                  autoComplete="off"
                />
                {isLoading && (
                  <img className="loading__image-small" src={Loading} alt="" />
                )}
                <i className="fas fa-search" />
              </form>
              {searchValue && showResult ? (
                <SearchList
                  searchBoxRef={searchBoxRef}
                  searchValue={searchValue}
                  showResult={showResult}
                  setShowResult={setShowResult}
                />
              ) : null}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  carts: state.carts,
  searchValue: state.searchValue,
  userInfo: state.userInfo,
});

export default connect(mapStateToProps, actions)(Navbar);
