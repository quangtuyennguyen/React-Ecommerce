import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="wrap-footer">
        <div className="row u-padding-top-medium u-padding-bottom-medium">
          <div className="col span_1_of_6">
            <a href="./index.html">
              <img
                className="footer__logo"
                src="https://res.cloudinary.com/shopping-assets/image/upload/v1584263975/logo_lrcmli.png"
                alt=""
              />
            </a>
            <p className="footer__desc">
              17 Princess Road, London, Greater London
            </p>
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a href="/" className="footer__social-link">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="/" className="footer__social-link">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="/" className="footer__social-link">
                  <i className="fab fa-pinterest-p" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="/" className="footer__social-link">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col span_3_of_6">
            <div className="row-fluid">
              <div className="col span_1_of_2">
                <h5 className="footer__heading--sub">
                  Got Question? Call us 24/7
                </h5>
                <h4 className="footer__heading--main">[80] 1017 197</h4>
                <p className="footer__desc">
                  12 Impasse Fantasio, 11000 Carcassonne, France
                </p>
                <a
                  href="https://goo.gl/maps/QBKKxVTpwUxwwBm56"
                  className="btn btn--primary"
                >
                  <i className="fas fa-map-marker-alt" />
                  View On Map
                </a>
              </div>
              <div className="col span_1_of_2">
                <h5 className="footer__heading footer__heading--sub">
                  We Using
                </h5>
                <h4 className="footer__heading footer__heading--main">
                  Safe Payments
                </h4>
                <div className="box-payment">
                  <ul className="payments u-padding-top-small u-padding-bottom-small">
                    <li className="payment__item">
                      <a href="/" className="payment__link">
                        <img
                          src="https://res.cloudinary.com/shopping-assets/image/upload/v1584335137/skril-1_e4vxww.png"
                          alt="Payment 1"
                        />
                      </a>
                    </li>
                    <li className="payment__item">
                      <a href="/" className="payment__link">
                        <img
                          src="https://res.cloudinary.com/shopping-assets/image/upload/v1584335136/palypal-1_iyzbtq.png"
                          alt="Payment 2"
                        />
                      </a>
                    </li>
                    <li className="payment__item">
                      <a href="/" className="payment__link">
                        <img
                          src="https://res.cloudinary.com/shopping-assets/image/upload/v1584335136/american_express-1_iwa0ih.png"
                          alt="Payment 3"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="box-secure">
                  <h6 className="secure__title">Secured by:</h6>
                  <ul className="secures__list">
                    <li className="secure__item">
                      <img
                        src="https://res.cloudinary.com/shopping-assets/image/upload/v1584334984/norton_av_logo1_qdnurg.png"
                        alt="Secure 1"
                      />
                    </li>
                    <li className="secure__item">
                      <img
                        src="https://res.cloudinary.com/shopping-assets/image/upload/v1584334984/mcAfee_logo1_ednlke.png"
                        alt="Secure 2"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col span_1_of_6">
            <h4 className="footer__heading footer__heading--top">Our Stores</h4>
            <ul className="lists-address">
              <li className="address__item">
                <Link to="/" className="address__link">
                  New York
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  London SF
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  Cockfosters BP
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  Los Angeles
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  Chicago
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  Las Vegas
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  Albarto
                </Link>
              </li>
            </ul>
          </div>
          <div className="col span_1_of_6">
            <h4 className="footer__heading footer__heading--top">
              Quick Links
            </h4>
            <ul className="lists-address">
              <li className="address__item">
                <Link to="/" className="address__link">
                  Support Center
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  Term &amp; Conditions
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  Shipping
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  Privacy Policy
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  Help
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  Products Return
                </Link>
              </li>
              <li className="address__item">
                <Link to="/" className="address__link">
                  FAQS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="row u-padding-top-regular u-padding-bottom-regular">
          <div className="col span_1_of_2">
            <p className="footer__copyright-text">
              © 2018 <span>XpeedStudio</span> All Rights Reserved
            </p>
          </div>
          <div className="col span_1_of_2">
            <ul className="footer__social-list u-right-text">
              <li className="footer__social-item">
                <a href="/" className="footer__social-link">
                  <i className="fab fa-facebook-f" />
                  Facebook
                </a>
              </li>
              <li className="footer__social-item">
                <a href="/" className="footer__social-link">
                  <i className="fab fa-twitter" />
                  Twitter
                </a>
              </li>
              <li className="footer__social-item">
                <a href="/" className="footer__social-link">
                  <i className="fab fa-pinterest-p" />
                  Pinterest
                </a>
              </li>
              <li className="footer__social-item">
                <a href="/" className="footer__social-link">
                  <i className="fab fa-instagram" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
