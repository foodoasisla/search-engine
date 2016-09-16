const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('hello express!')
});

app.listen(port, (err) => {
    if (err) {
        return console.log('there is an error', err);
    }
    console.log('server listening on port 3000');
});