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
$(document).ready()
{
	//dibujarReloj();
	//cargarHoraCliente();
	//obtenerHoraMiServidor();

	//setDate('clientClock', new Date());
	//setInterval(cargarHoraCliente, 1000);
	//setInterval(obtenerHoraMiServidor, 1000);

}//Fin funcion Ready
//--------------FUNCIONES----------
/**
*Send the data in ther form of the login page as an HTTP post transaction.
*Use a post transaction to avoid sending it with a default GET that sends the data
*using a fromat: URL?name=value&name2=value...
*/
function login()
{
	console.log('START OF LOGIN');
	
	$.ajax({
		url:'http://127.0.0.1:3000/cliente',
		type: 'POST',
		/*Send al the data of the form that is in the html where this function is called:
		*login.html*/
		data: $('form').serialize(),
		success: function(response){
			console.log(response);
		},
		error: function(xhr,status,error){
			console.log("Error in login function!");
			console.log(error.message);
		},

	});
	//End ajax function

}//End function login
//----------------------------------
/**
*Get hour of local server on JSON format in case of success. In case of error print
*on console that was an error.
*
*/
function obtenerHoraMiServidor()
{
	$.ajax({
		url: 'http://127.0.0.1:3000/serverTime',
		type: 'GET',
		dataType:"json",
		contentType:"application/json",
		cache: false,
		timeout: function()
		{
			console.log("Process completed!");
		},
		success:function(response){
			//console.log("Exito!");
			//console.log(response);
			setHoraMiServidor(response);
		},
		error:function(xhr,status, error){
			console.log("Error!");
			console.log(error.message);
		},

	});

}//Fin funcion cargarHoraMiServidor
//----------------------------------
