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

app.get('/search/:', (req, res) => {
    try {
        
    } catch (error) {
        res.status(404).json({message: error.message })
    }
})