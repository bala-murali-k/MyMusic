/*
	importing the required modules
*/
const express = require('express');
const path = require('path');

/*
	Defining the required objects
*/

const app = express();

/*
	Defining the required variables
*/

const PORT = 3000;

/*
	service starts here
*/

app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`The application is running at http://localhost:${PORT}`);
});
