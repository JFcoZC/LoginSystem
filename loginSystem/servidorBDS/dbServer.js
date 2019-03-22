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
/*Insert a ROL and a USER for that role*/
//dbServer.insertRol('Manager');


/*Fin User given id and password*/
//dbServer.findUser(1,'hola');
//dbServer.findUser('root','root');
//dbServer.findUser('paco','pass');

/*Specify the values of the DB in which the sessions will be stored
*
*@param: IP
*@param: socket
*/
dbServer.setDataSessionsDB('192.168.0.40', 6379);

dbServer.createSession('u1');
//dbServer.findSession(1);
//dbServer.findSession(2);

//dbServer.insertUser('pedro','hola',1);
//dbServer.doLogin('prueba','prueba',1);