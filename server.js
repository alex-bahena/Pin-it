const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const hbs = exphbs.create({});
const morgan = require("morgan")


const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
Database.pagesName();
Database.pagesArray();
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(routes);
const homeRoutes = require ("./controllers/home-routes.js")
//const registerRoutes = require ("./routes/register.js")
//app.use("/register", registerRoutes)
app.use("/", homeRoutes)

app.use(routes);
//handle 404
const errorController = require('./controllers/error');
app.use(errorController.get404);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


