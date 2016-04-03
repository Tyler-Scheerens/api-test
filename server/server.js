'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');

const app = loopback();

app.start = function serverStart() {
  // start the web server
  return app.listen(function serverListen() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);

    const explorer = app.get('loopback-component-explorer');
    if (explorer) {
      console.log('Browse your REST API at %s%s', baseUrl, explorer.mountPath);
    }
  });
};

boot(app, __dirname, function serverBoot(err) {
  if (err) {
    throw err;
  }

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
});
