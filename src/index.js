import React from 'react';
import ReactDOM from 'react-dom';

// Import Global Components
import Header from './common/Header'
import Footer from './common/Footer'
import App from './App'

// Import Global SCSS
import './scss/style-main.scss'

// Import Router
import { BrowserRouter as Router } from 'react-router-dom'

// Import Redux Store
import { Provider } from 'react-redux'
import store from './store/index'
import ScrollToTop from './common/ScrollToTop';

ReactDOM.render(
  <div className="portfolio">
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Header />

        <div className="main-content">
          <App />
        </div>

        <Footer />
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);
