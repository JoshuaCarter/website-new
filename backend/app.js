'use strict';

var env = require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require('cors');

//check for env error
if (env.error) {
	throw env.error;
} else {
	env = env.parsed;
}

//make app
const app = express();

//static dir
app.use(express.static('public'));
//favicon
app.use('/favicon.ico', express.static('favicon.ico'));

//cross origin middleware
app.use(cors({
	origin: true,		//reflect request origin
	credentials: true	//use header for cookies
}));

//session middleware
app.use(session({
	secret: 'khada',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 3600000, 		//last 1hr
		secure: false 			//no ssl
	}
}));

//decode json in body
app.use(express.json());

//default route serves react
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

//listen
app.listen(env.SERVER_PORT, env.SERVER_IP);