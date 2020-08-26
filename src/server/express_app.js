// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.status(200).sendFile(path.resolve('src/client/views/index.html'))
})

// POST route
app.post('/add', addWeather);

function addWeather (req,res){
    // note that this will replace the previous projectData entry
    projectData = req.body;
    console.log('POSTED:',projectData);
};

// GET route
app.get('/retrieve', sendData);

function sendData (request, response) {
  response.send(projectData);
  console.log('RETURNED:',projectData);
}; 

module.exports = app;