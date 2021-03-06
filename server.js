const fs = require("fs");
const path = require("path");
const express = require('express');
const uuid = require('uuid');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const { notes } = require('./db/db.json')
const notesArray = notes;
// const { getNotes, saveNote } = require('./public/assets/js/index')
// const apiRoutes = require('./public/assets/js/index')

// function createNewNote(body, notesArray) {
//     const note = body;
//     notesArray.push(note);
//     fs.writeFileSync(
//         path.join(__dirname, './db/db.json'),
//         JSON.stringify({ notes: notesArray }, null, 2)
//     );
//     return note;
// }
app.get('/api/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

app.post('/api/notes', (req, res) => {
    // req.body.id = notes.length.toString();
    const note = req.body;
    
    console.log(req.body);

    // const  = createNewNote(req.body, notes);
    notesArray.push(note);
    fs.writeFileSync(
                path.join(__dirname, './db/db.json'),
                JSON.stringify({ notes: notesArray }, null, 2)
            );
    res.json(note);
});


app.delete ('/api/:id', (req, res) => {
    console.log('we gonna delete somethin');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.listen(PORT, () => {
    console.log(`Shh, this is a library. Listen on ${PORT}`);
});