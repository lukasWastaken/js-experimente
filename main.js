const express = require('express');
const path = require('path');
const fs = require('fs');


/*
JSON INTERACTIONS
*/

const jsonobject = {
    name: "test-name",
    password: "test-password",
    email: "test-email"
}


/*
WEBSERVER
*/

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
    
});

//Req = request -> enthält infos vom client
//Res = response -> enthält infos die der Server wegschickt
app.get('/test', (req, res) => {
    res.send('Server\'s running!')
})
 


app.get('/file/:filename', (req, res) => {
    const filename = req.params.filename
    const file = `${__dirname}/files/` +filename;
    res.download(file); 
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
