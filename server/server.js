const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var morgan = require('morgan');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

var pg = require('pg'),
  session = require('express-session'),
  pgSession = require('connect-pg-simple')(session);

var pgConfig = {
  host: config.host,
  user: config.username,
  database: config.database,
  password: config.password,
  port: 5432,
  max: 100, // max number of connection can be open to database
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};
var pgPool = new pg.Pool(pgConfig);

//const sequelize = require('./services/sequelize');
const port = process.env.PORT || 5000;

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// To enable HTTP cookies over CORS, set credentials = true
// Origin = localhost:3000 is for development, allow for webpack-dev-server
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000'
  })
);

app.use(
  bodyParser.urlencoded({
    extended: false,
    parameterLimit: 10000,
    limit: 1024 * 1024 * 10
  })
);
app.use(
  bodyParser.json({
    extended: false,
    parameterLimit: 10000,
    limit: 1024 * 1024 * 10
  })
);

const sessionStore = (module.exports.sessionStore = new pgSession({
  pool: pgPool, // Connection pool
  tableName: 'Sessions' // Use another table-name than the default 'session' one
}));

app.use(
  session({
    key: 'user_sid', // Cookie name
    store: sessionStore,
    secret: config.secretKey,
    resave: false,
    cookie: {
      maxAge: null,//2 * 60 * 60 * 1000, // 2 hours
      httpOnly: false // Set to false to allow javascript on client side manage the cookie
    }, 
    saveUninitialized: false
  })
);

// This middleware will check if user's cookie is still saved in browser and user is not set,
// then automatically log the user out.
// This usually happens when you stop express server after login,
// The cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

const server = require('http').Server(app);

// Initialize websocket
require('./websocket')(server);

// API routes and controllers
require('./api')(app);

// Serve client app when production
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

server.listen(port, () => console.log(`Listening on port ${port}`));
