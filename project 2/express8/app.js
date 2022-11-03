const express = require('express');
const app = express();
const port = 80;

// Serving static files
app.use('/static', express.static('static'));


app.get("/", (req, res) => {
    res.send('this is my first express app with Hamza My Own');
});

app.get("/about", (req, res) => {
    res.status(200).send('this is my first [About-Page] on node Express');
});

// We're Firing 'Get' Request "Through-Express"; & saying if the 'URL' on The Browser's [SEARCH-BAR] Matches with..
let oldPageSource = "/oldPage";
app.get(oldPageSource, (req, res) => {
    res.status(404).send('Now, this file is not found!!');
});
// & This method Would b Similar with Other 'GET-Requests'!

app.post('/postRequestPage', (req, res) => {
    res.status(200).send("Now, Serving HTML File Through POST Request");
});


app.listen(port, () => {
    console.log("the application started successfully on port" + port);
});