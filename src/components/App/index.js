import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as actions from '../../actions';
import LayOut from '../../commons/Layout';
import { TIMER_VALUES } from '../../constants';
import { routes } from '../../constants/routers';
import { auth, generateUserDocument } from '../../services/firebase';
import { customRoutes } from '../CustomRoutes';

App.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  fetchProductCommments: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  fetchPostComments: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
  hideLoading: PropTypes.func.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

function App({
  fetchProducts,
  fetchProductCommments,
  fetchPosts,
  fetchPostComments,
  toggleLoading,
  hideLoading,
  fetchUserInfo,
  hideModal,
}) {
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    // fetch products
    toggleLoading(TIMER_VALUES.sub, () => {
      fetchProducts(() => {
        setIsFetched(true);
      });
    });
  }, [fetchProducts, hideLoading, toggleLoading]);

  useEffect(() => {
    // fetch product comments
    fetchProductCommments(() => {});
  }, [fetchProductCommments, toggleLoading]);

  useEffect(() => {
    // fetch posts
    fetchPosts(() => {});
  }, [fetchPosts]);
  useEffect(() => {
    // fetch posts comments
    fetchPostComments(() => {});
  }, [fetchPostComments]);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      if (user) {
        fetchUserInfo(user);
        hideModal();
      } else {
        // Here can handle show modal sign in
      }
    });
  }, [fetchUserInfo, hideModal]);

  const renderRoutes = () =>
    _.map(routes, ({ path, exact, component: MyComponent, name }) => (
      <Route key={path} path={path} exact={exact}>
        <LayOut name={name}>
          {customRoutes(path, MyComponent, isFetched)}
        </LayOut>
      </Route>
    ));

  return (
    <Router>
      <Switch>{renderRoutes()}</Switch>
    </Router>
  );
}

export default connect(null, actions)(App);
