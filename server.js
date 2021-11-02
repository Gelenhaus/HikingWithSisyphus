const path = require('path');
const express = require('express');
const routes = require('./controllers');
const app = express();
const PORT = process.env.PORT || 3001;
// const hiking = require('./database');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});