const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("hello there buddy!")
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});