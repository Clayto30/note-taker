const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const notes = require('./db/db.json')
// const apiRoutes = require('./public/assets/js/index')
app.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});
app.listen(PORT, () => {
    console.log(`Shh, this is a library. Listen on ${PORT}`);
});