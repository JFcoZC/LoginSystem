/**
*Jose Francisco Zeron Cabrera
*154678
*
*Client file.
*
*File that contents functions that are call by the client when it loads the html file.
*/

/**
*Represents de universal unique identifier of active session (if it exists one)
*/
var numberSession = 0;

//Execute after load the html but befire loading images,css and so on...
$(document).ready()
{
	//************
	//PELIGROSO USAR AUTOMATICAMENTE PORQUE ENTRA EN CICLO
	//verifySession(numberSession);
	//************

}//Fin funcion Ready
//--------------FUNCIONES----------
/*
*Send the data as an HTTP post transaction with json format.
*
*@Param {string} - sessionkey
*/
function verifySession(sessionkey)
{
	console.log('START OF LOGIN');
	
	$.ajax({
		url:'http://127.0.0.1:3000/verifySession',
		type: 'POST',
		/*Send al the data in json format*/
		data: {sessionId:sessionkey},
		/*Format of the data that will be recieved*/
		dataType :'html',
		success: function(response){
			/*console.log(response);*/
			/*Load HTML recived*/
			$('html').html(response);
		},
		error: function(xhr,status,error){
			console.log("Error verifying session!");
			console.log(error.message);
		},

	});
	//End ajax function

}//End function login
//----------------------------------
function registerUser()
{
	console.log('REGISTER OF USER');

	var pass = document.getElementsByName('paswd')[0].value;
	var uname = document.getElementsByName('user')[0].value;
	
	$.ajax({
		url:'http://127.0.0.1:3000/register',
		type: 'POST',
		/*Send al the data in json format*/
		data: {contra:pass,
			   username:uname},
		/*Format of the data that will be recieved*/
		dataType :'text',
		success: function(response){
			
			/*1)Save uuid recieved from server*/
			console.log("New session for client with id: "+response);
			numberSession = response;

			//Verify if session is active and redirect to 
			//corresponding page
			//verifySession(numberSession);

		},
		error: function(xhr,status,error){
			console.log("Error verifying session!");
			console.log(error.message);
		},

	});
	//End ajax function

}//End function login

