import { css } from 'glamor';
import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BgModal from '../../commons/BgModal';
import Loading from '../../commons/Loading';
import Modal from '../../commons/Modal';
import Main from '../../containers/Main';
import { Zoom } from '../../helpers';
import Footer from '../Footer';
import Header from '../Header';

export const customRoutes = (path, MyComponent, isFetched) => {
  if (path !== '/admin-signin') {
    return (
      <Fragment>
        <Header />
        <Main>
          <MyComponent />
        </Main>
        {isFetched && <Footer />}
        <Modal />
        <BgModal />
        <Loading />
        <ToastContainer
          transition={Zoom}
          autoClose={4000}
          bodyClassName={css({
            fontSize: '14px',
          })}
        />
      </Fragment>
    );
  } else {
    return (
      <Main>
        <MyComponent />
        <Loading />
      </Main>
    );
  }
};
