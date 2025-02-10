/*
	importing the required modules
*/
const express = require('express');
const path = require('path');
const env = require('dotenv');
const jsdom = require('jsdom');

/*
	Defining the required objects
*/
const app = express();
env.config();

/*
	Defining the required variables
*/

const PORT = 3000;

/*
	service starts here
*/
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'frontend')));

// app.use(express.static());

//code started for the entry page
app.get('/', (req, res) => {
	console.info("The page is redirected to authorization.");
	// sessionStorage.setItem(isAuthourized, 'true');
	res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
	res.redirect('/auth');
});

//code started for the authorization page
app.get('/auth', (req, res) => {
	console.info('The application is in authorization page');
	res.sendFile(path.join(__dirname, 'frontend/auth', 'index.html'));
});
app.post('/auth', (req, res) => {
	console.info('AUTHOURIZATION FUNCTION EXECUTION STARTED');
	const requestBody = req.body.password;
	console.log(requestBody.password, process.env.APP_PASS);
	if (requestBody === process.env.APP_PASS) {
		// sessionStorage.setItem(isAuthourized, 'true');
		res.send('User is Authourized');
	}
	console.info('AUTHOURIZATION FUNCTION EXECUTION ENDED');
});

app.listen(PORT, () => {
	console.log(`The application is running at http://localhost:${PORT}`);
});