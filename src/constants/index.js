import _ from 'lodash';
import React from 'react';

export const LINKS = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/shop',
    name: 'Shop',
  },
  {
    path: '/about',
    name: 'About Us',
  },
  {
    path: '/blog',
    name: 'Blog',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

export const FILTER_BY_ICON = [
  {
    name: 'fas fa-desktop',
    category: 'Computer',
  },
  {
    name: 'fas fa-camera-retro',
    category: 'Camera',
  },

  {
    name: 'fas fa-mobile-alt',
    category: 'Mobile',
  },
  {
    name: 'fas fa-headphones-alt',
    category: 'Headphone',
  },
  {
    name: 'far fa-clock',
    category: 'Watches',
  },
  {
    name: 'fas fa-volume-up',
    category: 'Speaker',
  },
  {
    name: 'fas fa-male',
    category: 'Men Clothing',
  },
  {
    name: 'fas fa-female',
    category: 'Women Clothing',
  },
];

export const RANGER_VALUES = { min: 0, max: 1000 };

export const CATEGORIES = [
  {
    category: 'Mobile',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1585306961/03_vwxwgo.jpg',
    widgets: ['Apple Products', 'Sony Products,...etc.'],
  },
  {
    category: 'Headphone',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1585306853/sd_fsiqid.png',
    widgets: ['Closed-Back Products', 'Earbuds Products,...etc.'],
  },
  {
    category: 'Speaker',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1585306853/ssdsd_l6su2b.png',
    widgets: ['Tweeter Products', 'Subwoofer Products,...etc.'],
  },
  {
    category: 'Computer',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1585306853/sasas_pfrceq.png',
    widgets: ['Dell Products', 'Asus Products,...etc.'],
  },
  {
    category: 'Women Clothing',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584350969/01_zljs28.jpg',
    widgets: ['Dress Products', 'Skirt Products,...etc.'],
  },
  {
    category: 'Men Clothing',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1585306853/wewew_sz23gp.png',
    widgets: ['Pants Products', 'Shirt Products,...etc.'],
  },
  {
    category: 'Watches',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1585306853/sdsdsdds_u3wy3r.png',
    widgets: ['Digital Products', 'Hybrid Products,...etc.'],
  },
  {
    category: 'Camera',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1585308538/Untitled-1_oizsel.png',
    widgets: ['Mirrorless Products', 'Point and Shoot,...etc.'],
  },
];

export const BRANDS = [
  {
    title: 'Brand photo 1',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_1_qcj0zs.png',
  },
  {
    title: 'Brand photo 2',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_2_sggp3p.png',
  },
  {
    title: 'Brand photo 3',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_3_tmoqqr.png',
  },
  {
    title: 'Brand photo 4',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_1_qcj0zs.png',
  },
  {
    title: 'Brand photo 5',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_5_ozkoxd.png',
  },
  {
    title: 'Brand photo 6',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584334485/sponsors_white_6_rwshpw.png',
  },
];

export const TIMER_VALUES = { main: 1000, sub: 1800 };

export const USERNAME_DATA = [
  'Margherita Erwin',
  'Elayne Parker',
  'Dotty Talbot',
  'Jaime Sylvester',
  'Brandon Segura',
  'Chin Otto',
  'Roderick Corona',
  'Latisha Burger',
  'Josef Lay',
  'Sanjuana Daley',
  'Hsiu Masters',
  'Francis Carr',
  'Michal Richter',
  'Joane Blair',
  'Whitney Gorman',
  'Brigitte Devine',
  'Ermelinda Lilly',
  'Tari Engel',
  'Jamila Naquin',
  'Son Olsen',
  'Johnette Ledford',
  'Tod Lambert',
  'Johana Arias',
  'Jacinta Rushing',
  'Rusty Villalobos',
  'Oleta Montano',
  'Cecile Dutton',
  'Guillermina Delacruz',
  'Dorsey Irwin',
  'Cleveland Hagen',
  'Mikel Grace',
  'Curt Roy',
  'Rosario Crane',
  'Cori Coates',
  'Brendan Person',
  'Hiedi Houser',
  'Bunny Petty',
  'Kecia Gentry',
  'Rolando Dubois',
  'Julian Cornelius',
  'Bertram Weir',
  'Mary Galvan',
  'Jama Hammer',
  'Camie Hensley',
  'Rosette Singer',
  'Janine Terry',
  'Janeen Giles',
  'Zachary Esparza',
  'Muriel Love',
  'Stormy Fitzpatrick',
  'Liberty Mcmullen',
  'Lore Lucas',
  'Aletha Dick',
  'Tommye Morrow',
  'Shari Castillo',
  'Agnus Lam',
  'Brian Eastman',
  'Yer Jernigan',
  'Janett Zimmerman',
  'Jordan Mcelroy',
  'Coleen Wilkerson',
  'Jessica Walters',
  'Fumiko Billings',
  'Drew Mcbride',
  'Corliss Carey',
  'Tiana Whitehead',
  'Omega Blanton',
  'Karine Talley',
  'Rudolf Coker',
  'Malika Acosta',
  'Clint Shaffer',
  'Robbin Geiger',
  'Aracely Chatman',
  'Palmira Erwin',
  'Myung Parker',
  'Bennie Talbot',
  'Lila Sylvester',
  'Marx Segura',
  'Lamonica Otto',
  'Rosetta Corona',
  'Carletta Burger',
  'Eleonor Lay',
  'Francesco Carr',
  'Kristle Richter',
  'Richard Carr',
  'Russell Blair',
  'Ray Devine',
  'Thanh Gorman',
  'Mohammed Gorman',
  'Lydia Lilly',
  'Shantel Engel',
  'Albina Naquin',
  'Estela Olsen',
  'Colin Talley',
  'Taisha Coker',
  'Erin Acosta',
  'Meg Shaffer',
  'Thanh Gorman',
  'Hertha Geiger',
  'Barabara Chatman',
];

export const WOMEN_IMAGES = [
  {
    tilte: 'Women photo 1',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584323845/product_1_o3rqqp.jpg',
  },
  {
    tilte: 'Women photo 2',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584323778/product-block-slider-women-1_avjrpw.jpg',
  },
  {
    tilte: 'Women photo 3',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584323778/product-block-slider-women-2_sedc12.jpg',
  },
];

export const MEN_IMAGES = [
  {
    tilte: 'Men photo 1',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328080/man_slider_2_406x628_izhi2s.jpg',
  },
  {
    tilte: 'Men photo 2',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328080/man_slider_3_406x628_pbiub7.jpg',
  },
  {
    tilte: 'Men photo 3',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328080/man_slider_4_406x628_dgfndf.jpg',
  },
];

export const MOBILE_IMAGES = [
  {
    tilte: 'Mobile photo 1',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328382/phone_slider_1_406x628-1_ujomxb.png',
  },
  {
    tilte: 'Mobile photo 2',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328382/phone_slider_2_406x628_spuy2m.jpg',
  },
  {
    tilte: 'Mobile photo 3',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328382/phone_slider_3_406x628-2_ao0dww.jpg',
  },
  {
    tilte: 'Mobile photo 4',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328382/phone_slider_4_406x628-1_easnma.jpg',
  },
];

export const COMPUTER_IMAMES = [
  {
    tilte: 'Computer photo 1',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328704/laptop_slider_1_406x628_sektng.jpg',
  },
  {
    tilte: 'Computer photo 2',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328704/laptop_slider_2_406x628_a4269e.jpg',
  },
  {
    tilte: 'Computer photo 3',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328704/laptop_slider_3_406x628_kbegep.jpg',
  },
  {
    tilte: 'Computer photo 4',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328703/laptop_slider_4_406x628_mhhm8g.jpg',
  },
];

export const WATCHES_IMAGES = [
  {
    tilte: 'Watch photo 1',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328614/watch_slider_1_406x6281_mzq2bq.jpg',
  },
  {
    tilte: 'Watch photo 2',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328614/watch_slider_2_406x6281_z35vej.jpg',
  },
  {
    tilte: 'Watch photo 3',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584328614/watch_slider_3_406x6281_b4admd.jpg',
  },
];

export const SLIDER_HEADER = [
  {
    headingSub: 'Get 50% Off',
    headingMain: 'SHOP WISE WITH PRICE',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584262594/banner_1_sihbnm.jpg',
    subMove: 'textBannerMoveInRight',
    mainMove: 'textBannerMoveInLeft',
    btnAnimation: 'btnBannerScaleAnimation',
  },
  {
    headingSub: 'Get 20% Off',
    headingMain: 'SHOP WISE WITH PRICE',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584262594/banner_2_vcgcqk.jpg',
    subMove: 'textBannerMoveInBottom',
    mainMove: 'textBannerMoveInTop',
    btnAnimation: 'btnBannerScaleAnimation',
  },
  {
    headingSub: 'Get 60% Off',
    headingMain: 'SHOP WISE WITH PRICE',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584263704/banner_3_tpgczr.jpg',
    subMove: 'textBannerMoveInLeft',
    mainMove: 'textBannerMoveInRight',
    btnAnimation: 'btnBannerScaleAnimation',
  },
];

export const FEATURES = [
  {
    id: 1,
    title: 'Get holiday deals',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1587869248/offer_banner_1_loahux.png',
  },
  {
    id: 2,
    title: 'Every handset retina item',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1587869247/offer_banner_2_momys7.png',
  },
  {
    id: 3,
    title: 'Music makes feel better',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1587869248/offer_banner_3_ps5a7b.png',
  },
];

export const CATEGORY_LINKS = [
  'Mobile',
  'Headphone',
  'Speaker',
  'Computer',
  'Women Clothing',
  'Men Clothing',
  'Watches',
  'Camera',
];

export const CATEGORY_LISTS = [
  {
    id: 1,
    section: 'section-women',
    category: 'Women Clothing',
    links: CATEGORY_LINKS,
    images: WOMEN_IMAGES,
  },
  {
    id: 2,
    section: 'section-men',
    category: 'Men Clothing',
    links: CATEGORY_LINKS,
    images: MEN_IMAGES,
  },
  {
    id: 3,
    section: 'section-watches',
    category: 'Watches',
    links: CATEGORY_LINKS,
    images: WATCHES_IMAGES,
  },
  {
    id: 4,
    section: 'section-computers',
    category: 'Computer',
    links: CATEGORY_LINKS,
    images: COMPUTER_IMAMES,
  },
  {
    id: 5,
    section: 'section-mobiles',
    category: 'Mobile',
    links: CATEGORY_LINKS,
    images: MOBILE_IMAGES,
  },
];

export const BLOG_TAGS = [
  '#gadgets',
  '#online shopping',
  '#top brands',
  '#travel',
  '#cartzilla news',
  '#tips',
  '#tricks',
  '#personal finance',
];

const STATS = [
  {
    number: '12',
    text: 'Years Experience',
  },
  {
    number: '20K',
    text: 'Happy Customers',
  },
  {
    number: '100%',
    text: 'Clients Satisfaction',
  },
];

const LISTS = [
  'Credibly innovate granular internal',
  'Grantedly underconstructions reloaded',
  'Interactively procrastinate high-payoff',
  'Completely synergize resource taxing relationships',
];

function Stats() {
  return (
    <div className="content__stats">
      {_.map(STATS, ({ number, text }) => (
        <div key={number} className="content__stat">
          <span className="content__stat-value">{number}</span>
          <span className="content__stat-name">{text}</span>
        </div>
      ))}
    </div>
  );
}

function Lists() {
  return (
    <ul className="content__list">
      {_.map(LISTS, item => (
        <li key={item} className="content__item">
          <i className="fas fa-check" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export const ABOUT_LIST = [
  {
    title: `Creative and renovate fashion trends`,
    id: 'section-history',
    subTitle: 'OUR HISTORY',
    textLarge: 'HISTORY',
    body:
      'Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    image:
      'https://wp.xpeedstudio.com/marketo/wp-content/uploads/2018/05/about_us_img_11.png',
    feature: <Stats />,
  },
  {
    title: 'We are marketpress',
    id: 'section-vision',
    subTitle: 'OUR VISION',
    textLarge: 'VISION',
    body:
      'Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    image:
      'https://wp.xpeedstudio.com/marketo/wp-content/uploads/2018/05/about_us_img_21.png',
    feature: <Lists />,
  },
];

export const MEMBERS = [
  {
    name: 'Tony Williamson',
    department: 'FOUDNER',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584784687/team_21_vimzlb.png',
  },
  {
    name: 'William Hanah',
    department: 'CEO',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584784688/team_61_awckfz.png',
  },
  {
    name: 'JInglo Jelian',
    department: 'ADVISOR',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584784687/team_71_erhz9a.png',
  },
  {
    name: 'Jony Smith',
    department: 'DESIGNER',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584784687/team_31_iizeb0.png',
  },
  {
    name: 'John',
    department: 'FOUNDER',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584784687/team_41_cshhrd.png',
  },
  {
    name: 'William Hana',
    department: 'CEO',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584784687/team_51_weajt8.png',
  },
  {
    name: 'JInglo Jelian',
    department: 'ADVISOR',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584784687/team_11_vfn3km.png',
  },
  {
    name: 'William',
    department: 'CEO',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584784687/team_21_vimzlb.png',
  },
];

export const SORT_PRODUCT = [
  {
    name: 'Popularity',
    sort: { sortBy: '', sortValue: null },
  },
  {
    name: 'Low - Hight Price',
    sort: { sortBy: 'price', sortValue: 1 },
  },
  {
    name: 'High - Low Price',
    sort: { sortBy: 'price', sortValue: -1 },
  },
  {
    name: 'A - Z Order',
    sort: { sortBy: 'title', sortValue: 1 },
  },
  {
    name: 'Z - A Order',
    sort: { sortBy: 'title', sortValue: -1 },
  },
];

export const SORT_COMMENT = [
  {
    name: 'Popular',
    sort: { sortBy: '', sortValue: null },
  },
  {
    name: 'Newest',
    sort: { sortBy: 'time', sortValue: -1 },
  },
  {
    name: 'Oldest',
    sort: { sortBy: 'time', sortValue: 1 },
  },
  {
    name: 'Low Rating',
    sort: { sortBy: 'rating', sortValue: 1 },
  },
  {
    name: 'High Rating',
    sort: { sortBy: 'rating', sortValue: -1 },
  },
];

export const TABS_CATEGORY = ['Mobile', 'Headphone', 'Camera', 'Speaker'];
export const TAB_HOT_SALE = ['16%', '25%', '50%'];
export const TAB_POPULAR = [
  'Featured Products',
  'Trending Products',
  'Hot Sale',
];

export const PRODUCT_BANNERS = [
  {
    heading: 'Basic gift idea',
    subTitle: 'Mini Two Wheel',
    title: 'Self Balancing Scooter',
    image:
      'https://res.cloudinary.com/shopping-assets/image/upload/v1584263790/product_1_u2apft.png',
  },
  {
    heading: 'Get 50% Off',
    subTitle: 'New Arrivals',
    title: 'in Accessories at Best Prices.',
    image:
      'https://wp.xpeedstudio.com/marketo/wp-content/uploads/2018/07/laptop1-1.png',
  },
];

export const progress = [
  {
    rating: 5,
    strokeColor: '#42d697',
    trailColor: '#f6f9fc',
  },
  {
    rating: 4,
    strokeColor: '#fe6975',
    trailColor: '#f6f9fc',
  },
  {
    rating: 3,
    strokeColor: '#fed700',
    trailColor: '#f6f9fc',
  },
  {
    rating: 2,
    strokeColor: '#83b735',
    trailColor: '#f6f9fc',
  },
  {
    rating: 1,
    strokeColor: '#fea569',
    trailColor: '#f6f9fc',
  },
];
