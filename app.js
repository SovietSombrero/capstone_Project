const express = require('express');
const fs = require('fs');
const app = express();



app.use(express.static('public'));
app.use(express.json());

app.post('/text',(req, res) => {
    
});

app.get('/', (req, res) => {
    
})

app.post('/answer',(req, res) => {
    res.send("answer")
    })



app.listen(3000, () => {
    console.log('Server started...');
});