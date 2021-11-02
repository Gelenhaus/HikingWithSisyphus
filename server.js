const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utilis/helpers');
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(require('./controllers/'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/public/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/register.html"));
});



app.get("/public/hikes.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/hikes.html"));
});



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});



//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });