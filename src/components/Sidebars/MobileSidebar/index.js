import PropTypes from 'prop-types';
import React from 'react';

import { auth } from '../../../services/firebase';
import SignIn from '../../Auth/SignIn';

NavMobileSideBar.propTypes = {
  hideModal: PropTypes.func.isRequired,
  renderLink: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  displayName: PropTypes.string,
};

NavMobileSideBar.defaultProps = {
  displayName: '',
};

function NavMobileSideBar({ hideModal, renderLink, showModal, displayName }) {
  const handleAuth = () => {
    if (displayName) {
      auth.signOut();
      window.location.reload();
    } else {
      showModal(<SignIn hideModal={hideModal} showModal={showModal} />);
    }
  };

  return (
    <div className="sidebar sidebar-nav--mobile">
      <div className="sidebar-nav--mobile__header">
        <div className="box-icons">
          <i
            onClick={handleAuth}
            className={`${displayName ? 'fas fa-sign-out-alt' : 'far fa-user'}`}
          />
          <span onClick={hideModal}>×</span>
        </div>
      </div>
      <nav className="nav" id="navMobile">
        <ul className="nav__list">{renderLink()}</ul>
      </nav>
    </div>
  );
}

export default NavMobileSideBar;
