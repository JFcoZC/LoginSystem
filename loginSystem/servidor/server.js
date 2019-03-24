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

/*Import module on file loginLibrary.js*/
var session  = require('../servidor/loginLibrary.js');
/*Adjust parameters of database of session table*/
session.setDataSessionsDB('192.168.0.40', 6379);
/*Adjust parameters of database of Tables ROL,USERS,PERMISSION*/
session.setDataDBUsersAndPermissions('192.168.0.30',5432,'postgres','postgres','postgres');


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
*Handle an HTTP get request to root by redirecting to /login folder direction
*@param {string} URL - root directory
*@param {function} function that is executed as a result of the request - Arrow function (=>) with 2 arguments
*/
app.get('/' , (req,res) => {

	res.redirect('/login');

});
/**End of HTTP get Handelr for root folder*/

/**
*Handler of an HTTP get request to /login and redirect to the path that give us access to the public folder 
*where the html, css and js files can be accessed (FIles SERVER defined with app.use() )
*
*@param {string} URL - login directory
*@param {function} function that is executed as a result of the request - Arrow function (=>) with 2 arguments
*/
app.get('/login', (req,res) => {
	
	res.redirect('/cliente/login.html');
	//session.handlerSession(sessionKey, res, '/cliente/home.html', '/cliente/login.html');
});
//End of HTTP get Handler for login

/*
* Post to create a new user in databse at the same time it creates a session for the user that is created
* Post method executed when submitin password and username from createAccount.html file with serverV3.js
* 
*@param {string} URL - cliente directory = HTML server
*@param {function} function that is executed as a result of the request - Arrow function (=>) with 2 arguments
*/	
app.post('/register', async function(req,res)
{
	
	console.log("POST IN /register");
	/*Get info of inputs using DOM model*/
	var password = req.body.contra;
	var user  = req.body.username;
	console.log('Password POST: '+password);
	console.log('USER POST: '+user);

	//Get promise value
	var sessionId = await session.doRegister(user,password,1);

	console.log('answer post with uuid: '+sessionId);
	//Answer to the client post with string
	res.send(sessionId);

	console.log("--- DONE POST /register --");


	/*Second way of obtain the promise response and answer the POST of the client*/
	
	/*session.doLogin(user,password,1).then(function(result)
	{

		const sessionId = result;

		console.log(sessionId);

		console.log('Answer post with uuid: '+sessionId);
		//Answer to the client post with string
		res.status(200).send(sessionId);
	}).catch(function(err) {console.log(err);});*/

});
/*End of post*/	

/*
* Post to verify valid credentials form user that wants access, and if found a user in db with that
* password and username generate a session.
*
* Post method executed when trying to login from login.html by submiting username and password.
* 
*@param {string} URL - cliente directory = HTML server
*@param {function} function that is executed as a result of the request - Arrow function (=>) with 2 arguments
*/

app.post('/login', async function(req,res)
{
	
	console.log("POST IN /login");
	/*Get info of inputs using DOM model*/
	var password = req.body.contra;
	var user  = req.body.username;
	console.log('Password POST: '+password);
	console.log('USER POST: '+user);

	//Get promise value
	var sessionId = await session.doLogin(user,password);

	console.log('answer login with uuid: '+sessionId);
	
	//Answer to the client by redirecting to 
	res.send(sessionId);

	console.log("--- DONE POST /login --");

});
/*End of post*/

/*
*Initial post to know if there is an active session. 
*This post method is called from client side when loading the html document through method: verifySession().
*This method is only called from the file serverv3.js in createAccount.html
*
*Function verifies if a session with the sessionId is found on the Table of the DB for SESSIONS.
*If found redirects to home page without ask for credentials
*If not found redirects to createAccount page to ask for credentials
*
*@param {string} URL - verifySession path/directory
*@param {function} function that is executed as a result of the request - Arrow function (=>) with 2 arguments
*
*@Retrurn {html file}
*/
app.post('/verifySession', (req,res) => {
	
	console.log("POST verifySession for creating account");
	console.log(req.body);
	var sessionKey = req.body.sessionId;
	console.log(sessionKey);

	//Verify if session exists for given sessionkey
	//And send corrsponding html file as response
	/*var isActive;
	session.findSession(sessionKey).then(function(result)
	{
		//Access to the value of promise
		console.log("-> "+result);
		isActive = result;

		if( isActive == true )
		{
			res.redirect( '/cliente/home.html');
		}
		else
		{
			res.redirect( '/cliente/login.html');

		}//End else	

		return result;
			
	}).then(function(result)
	{
		console.log("Fin!");

	});//End promise*/

	session.handlerSession(sessionKey, res, '/cliente/home.html', '/cliente/createAccount.html');	

});
/*End verifySession for Register POST*/

/*
*This method is only called from the file clienteLogin.js in login.html
*/
app.post('/verifySessionLogin', (req,res) =>{
	console.log("POST verifySession for login");
	console.log(req.body);
	var sessionKey = req.body.sessionId;
	console.log(sessionKey);

	session.handlerSession(sessionKey, res, '/cliente/home.html', '/cliente/login.html');

});
//End verify session for login

app.listen(3000);
console.log('server listening in port 3000');