// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';
import domBuilder from './components/domBuilder';
import searchForm from './components/searchForm';
import domEvents from './helpers/domEvents';

const init = () => {
  domBuilder();
  searchForm();
  domEvents();
};

init();
