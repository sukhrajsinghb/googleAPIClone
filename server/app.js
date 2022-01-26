const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

const search = require('./data')


app.get('/', (req, res) => {
    res.json('It works!')
})

//Reading aspects of the code

app.get('/search', (req, res) => {
    res.json(search)
})

app.get('/search/:name', (req, res) => {
    try {
        let requestedSearch = req.params.name
        let matchingSearch = search.find((item) => item.title.toLowerCase() === requestedSearch.toLowerCase());
        if(!matchingSearch) { throw new Error(`We don't have a page called ${requestedSearch}`)}
        res.json(matchingSearch)
    } catch (error) {
        res.status(404).redirect(`https://en.wikipedia.org/w/index.php?search=${requestedSearch}&title=Special:Search&profile=advanced&fulltext=1&ns0=1`);
    }
})

module.exports = app;