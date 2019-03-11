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