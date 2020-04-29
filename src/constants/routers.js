import Home from '../containers/Home/Home';
import Shop from '../containers/Shop/Shop';
import Blog from '../containers/Blog/Blog';
import { About } from '../containers/About/About';
import Checkout from '../containers/Checkout/Checkout';
import Carts from '../containers/Cart/Carts';
import Admin from '../containers/Admin/Admin';
import AdminSignin from '../containers/AdminSignin';
import { ContactContainer } from '../containers/Contact/Contact';
import WishListContainer from '../containers/WishList/WishList';
import { NotFound } from '../containers/NotFound/NotFound';
import ProductDetailsContainer from '../containers/ProductDetails/ProductDetails';
import PostDetails from '../containers/PostDetails/PostDetails';
import SearchPage from '../containers/SearchPage/SearchPage';
import OrderDetails from '../containers/OrderDetails/OrderDetails';

export const routes = [
  {
    path: '/',
    exact: true,
    name: 'wrapper wrapper-home-page',
    component: Home,
  },
  {
    path: '/shop',
    exact: true,
    name: 'wrapper wrapper-shop-page',
    component: Shop,
  },
  {
    path: '/search',
    exact: false,
    name: 'wrapper wrapper-shop-page',
    component: SearchPage,
  },
  {
    path: '/product-category/:category',
    exact: true,
    name: 'wrapper wrapper-shop-page',
    component: Shop,
  },
  {
    path: '/product/:title.:id',
    exact: true,
    name: 'wrapper wrapper-product-details-page',
    component: ProductDetailsContainer,
  },
  {
    path: '/about',
    exact: true,
    name: 'wrapper wrapper-about-page',
    component: About,
  },
  {
    path: '/blog',
    exact: true,
    name: 'wrapper wrapper-blog-page',
    component: Blog,
  },
  {
    path: '/blog/:title.:id',
    exact: true,
    name: 'wrapper wrapper-blog-page',
    component: PostDetails,
  },
  {
    path: '/contact',
    exact: true,
    name: 'wrapper wrapper-contact-page',
    component: ContactContainer,
  },
  {
    path: '/cart',
    exact: true,
    name: 'wrapper wrapper-cart-page',
    component: Carts,
  },
  {
    path: '/wishlist',
    exact: true,
    name: 'wrapper wrapper-wishlist-page',
    component: WishListContainer,
  },
  {
    path: '/checkout',
    exact: true,
    name: 'wrapper wrapper-checkout-page',
    component: Checkout,
  },
  {
    path: '/checkout/order-received/:orderNumber',
    exact: true,
    name: 'wrapper wrapper-order-details',
    component: OrderDetails,
  },
  {
    path: '/admin',
    exact: true,
    name: 'wrapper wrapper-admin-page',
    component: Admin,
  },
  {
    path: '/admin-signin',
    exact: true,
    name: 'wrapper',
    component: AdminSignin,
  },
  {
    path: '',
    exact: false,
    name: 'wrapper wrapper-notfound-page',
    component: NotFound,
  },
];
