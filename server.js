const path = require('path');
const express = require('express');

const session = require('express-session');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//turn on routes
app.use(routes)
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.send("hello there buddy!")
});



//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });