const contentTypes = require('./content');
const dynamicPages = require('./dynamic-page');
const index = require('../templates/index');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  app.get('/', (req, res) => {
    res.marko(index);
  });

  // Dynamic Pages
  dynamicPages(app);

  // Content Types
  contentTypes(app);

  // Website Sections
  websiteSections(app);
};
