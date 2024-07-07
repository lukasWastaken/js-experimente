const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

//Req = request -> enthält infos vom client
//Res = response -> enthält infos die der Server wegschickt
app.get('/test', (req, res) => {
    res.send('Server\'s fine')
})

app.get('/register/:username', (req, res) => {
    let username = req.params.username
    console.log(username)
    res.send("Entered Name: " + username)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
