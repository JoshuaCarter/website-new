'use strict';

const express = require('express');
const session = require('express-session');
const cors = require('cors');

//make app
const app = express();

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

//default route
app.get('/', (req, res) => {
	res.statusCode = 200;
	res.send("The server is running.");
});

//listen
app.listen(80, 'localhost');