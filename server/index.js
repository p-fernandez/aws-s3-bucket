'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const expressSanitizer = require('express-sanitizer');
const helmet = require('helmet');

require('./config');

const {
  preRoutesMiddlewares,
  postRoutesMiddlewares,
} = require('./api/middlewares');
const routes = require('./api/routes');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(expressSanitizer());

preRoutesMiddlewares(app);
routes(app);
postRoutesMiddlewares(app);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
