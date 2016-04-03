'use strict';

const path = require('path');

module.exports = function serverRoutes(app) {
  const routes = require('../../client/app/routes');
  routes.forEach(function addRoutes(route) {
    console.log(`Adding route: ${route}`);
    app.get(route, function addRoute(req, res) {
      res.sendFile(path.resolve(`${__dirname}/../../client/index.html`));
    });
  });
};
