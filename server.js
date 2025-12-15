const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors({origin: 'https://www.reddit.com/r/Sephora.json'}));

app.get('/', (req, res) => {
    res.status(200).json();
})