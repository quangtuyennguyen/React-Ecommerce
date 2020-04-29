import { css } from 'glamor';
import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BgModal from '../../commons/BgModal/BgModal';
import Loading from '../../commons/Loading/Loading';
import Modal from '../../commons/Modal/Modal';
import { Main } from '../../containers/Main/Main';
import { Zoom } from '../../helpers';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

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
