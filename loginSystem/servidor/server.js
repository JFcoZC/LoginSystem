/**
*Jose Francisco Zeron Cabrera
*154678
*
*Server file.
*
*File that contents functions that supply the clock information requested by clients using the
*help of the Express framework.
*/

/**Load module from express folder/library*/
const express = require('express');
var app = express();

/**Enable to avoid cors error that ocurrs when client URL and server do not match*/
var cors = require('cors');
app.use(cors());

/*Moddule to obtain path of files*/
var path = require('path');

/*Module to read POST DATA*/
var bodyParser = require('body-parser');
/*Add module to main app*/
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({extended:true}) );

/*Make public de directories in the specified path an access to them using the slected prefix.
*THIS LINE IS THE EQUIVALENT TO HAVE AN HTML SERVER LIKE APACHE
*
*@Param {string} - prefix
*@Param {path} - path to the directory that we are given public access
*/
app.use('/cliente',express.static( path.join(__dirname, '../cliente') ) );

/**
*Handler of an HTTP get request returning actual time on JSON
*@param {string} URL - sever/serverTime
*@param {function} function that is executed as a result of the request - Arrow function (=>) with 2 arguments
*/
app.get('/serverTime' , (req,res) => {

	/**Respond to request: sending actual time in miliseconds back on JSON format*/
	res.json({
		data: Date.now()
	});

});
/**End of HTTP get Handelr for serverTime */

/**
*Handler of an HTTP get request returning actual time on JSON
*@param {string} URL - root directory
*@param {function} function that is executed as a result of the request - Arrow function (=>) with 2 arguments
*/
app.get('/' , (req,res) => {

	/**Test to send some data on JSON format*/
	res.send({
		name : 'Andrew',
		location : 'Puebla'
	});

});
/**End of HTTP get Handelr for root folder*/

/**
*Handler of an HTTP get request and redirect to the path that give us access to the public folder 
*where the html, css and js files can be accessed
*
*@param {string} URL - 
*@param {function} function that is executed as a result of the request - Arrow function (=>) with 2 arguments
*/
app.get('/login', (req,res) => {
	
	/*app.use( express.static(path.join(__dirname,'../cliente/login.html')) );*/
	res.redirect( '/cliente/login.html');
});
/**End of HTTP get Handelr for login */

/*Action to perform when in this URL a post is performed*/
app.post('/cliente', (req,res) => {
	console.log("POST IN /cliente");
	/*Get info of inputs using DOM model*/
	var password = req.body.paswd;
	var user  = req.body.user;
	console.log('Password POST: '+password);
	console.log('USER POST: '+user);
	/*console.log(res);*/

});
/*End of post*/

app.listen(3000);
console.log('server listening in port 3000');