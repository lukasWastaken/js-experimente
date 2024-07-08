const express = require('express');
const path = require('path');

//Json interaktionen in js anschauen

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
 

app.get('/file/:filename', (req, res) => {
    const filename = req.params.filename
    const file = `${__dirname}/files/` +filename;
    res.download(file); // Set disposition and send it.
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
