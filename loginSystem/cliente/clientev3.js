/**
*Jose Francisco Zeron Cabrera
*154678
*
*Client file.
*
*File that contents functions that are call by the client when it loads the html file.
*/

/**
*Hacer las acciones cuando el HTML haya sido cargado por el cliente
*/
var numberSession = 1;

//Execute after load the html but befire loading images,css and so on...
$(document).ready()
{
	verifySession(numberSession);

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
		success: function(response){
			console.log(response);
		},
		error: function(xhr,status,error){
			console.log("Error verifying session!");
			console.log(error.message);
		},

	});
	//End ajax function

}//End function login
//----------------------------------

