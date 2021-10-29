const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const hiking = require('./data/hiking.json');

app.use(express.static('public'));

app.get('/api/hiking', (req, res) => {
    res.json(hiking);
});





app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});