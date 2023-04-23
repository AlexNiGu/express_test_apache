const express = require('express')
require('dotenv').config();
const port = process.env.MYPORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: "Llegaste al root"})
})


app.get('/test', (req, res) => {
    res.status(200).json({message: "Llegaste al test fdfd"})
})





app.listen(port, () => {
    console.log(`listening on port ${port}`)
})