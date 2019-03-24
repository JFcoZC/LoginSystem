/*
*This file is only used to create the DBServer tables automatically when it is executed.
*
*This functions are in a separated file in order to do not delte the databse every time
*the server is up.
*/

/*Import module on file loginLibrary.js*/
var dbServer = require('../servidor/loginLibrary.js');

/*Specify the values of the DB in which the DB will be created
*
*@param: IP
*@param: socket
*@param: DB name
*@param: User name
*@param: Password
*/
dbServer.setDataDBUsersAndPermissions('192.168.0.30',5432,'postgres','postgres','postgres');
/*Create SQL file*/
dbServer.createDatabaseFile();
/*Execute SQL File in specified DB*/
dbServer.uploadDatabaseFile();

//-------- FUNCTION ONLY FOR TESTING PURPOSES --------------
/*Specify the values of the DB in which the sessions will be stored
*
*@param: IP
*@param: socket
*/
//dbServer.setDataSessionsDB('192.168.0.40', 6379);

//dbServer.createSession('u1');
//dbServer.findSession(1);
//dbServer.findSession(2);
