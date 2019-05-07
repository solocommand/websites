const contactUs = require('./contact-us');
const contentTypes = require('./content');
const dynamicPages = require('./dynamic-page');
const home = require('./home');
const magazine = require('./magazine');
const loadMore = require('./load-more');
const publishedContent = require('./published-content');
const search = require('./search');
const subscribe = require('./subscribe');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Load More / Infinite Scroll
  loadMore(app);

  // Contact Us Page
  contactUs(app);

  // Magazine Pages
  magazine(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Types
  contentTypes(app);

  // Published content pages
  publishedContent(app);

  // Search
  search(app);

  // Subscription Pages
  subscribe(app);

  // Website Sections
  websiteSections(app);
};
