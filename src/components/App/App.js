import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LayOut } from '../../commons/Layout/Layout';
import * as actions from '../../actions';
import { TIMER_VALUES } from '../../constants';
import { routes } from '../../constants/routers';
import { auth, generateUserDocument } from '../../services/firebase';
import { customRoutes } from '../CustomRoutes';

const App = ({
  fetchProducts,
  fetchProductCommments,
  fetchPosts, fetchPostComments,
  toggleLoading, hideLoading,
  fetchUserInfo, hideModal
}) => {

  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => { // fetch products
    toggleLoading(TIMER_VALUES.sub, () => {
      fetchProducts(() => {
        setIsFetched(true);
      });
    });
  }, [fetchProducts, hideLoading, toggleLoading]);

  useEffect(() => { // fetch product comments
    fetchProductCommments(() => {
    });
  }, [fetchProductCommments, toggleLoading]);

  useEffect(() => { // fetch posts
    fetchPosts(() => {
    });
  }, [fetchPosts]);
  useEffect(() => { // fetch posts comments
    fetchPostComments(() => {
    });
  }, [fetchPostComments]);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      if (user) {
        fetchUserInfo(user);
        hideModal();
      } else {
        console.log("You signin yet, Please signin now");
        // handle show modal sign in
      }
    });
  }, [fetchUserInfo, hideModal]);

  

  const renderRoutes = () => (
    _.map(routes, ({ path, exact, component: MyComponent, name }) => (
      <Route key={path} path={path} exact={exact}>
        <LayOut name={name}>
          {customRoutes(path, MyComponent, isFetched)}
        </LayOut>
      </Route>
    )));

  return (
    <Router>
      <Switch>
        {renderRoutes()}
      </Switch>
    </Router>
  );
};

export default connect(null, actions)(App);