**Levantar servidor Web y servicios de Sesion:
C:
cd C:\Memoria\Semestre 8\Admin redes-serv\Practica2 login system\loginSystem\servidor
node server.js

**Crear tablas dado una BDS y un Usuario existente en Postgres
cd  C:\Users\Fzjimenez\Documents\Memoria\Semestre 8\Admin redes-serv\Practica 2 login system\loginSystem\servidorBDS
node dbServer.js

---
Configurar express en carpeta del servidor(Windows):
1)Generar paquete json: npm init (y enter a todo)
2)Instalar express: npm install express@4.16.0 --save
3)Crear archivo .js del servidor en roor de la carpeta donde se instalo express
---
**Instalar node-postgres
En misma carpeta donde esta instalado node y express
1)npm install pg

**Instalar body-parser para leer POSTs
En misma carpeta donde esta instalado node y express(loginSystem/Servidor)
1)npm install body-parser --save

**Instalar node-reddis
En misma carpeta donde esta instalado node y express(loginSystem/Servidor)
1)npm install redis

**Instalar bluebird (Promisess library)
En misma carpeta donde esta instalado node y express(loginSystem/Servidor)
1)npm install bluebird
---
Guia github:
http://rogerdudler.github.io/git-guide/index.es.html

Hacer push a branch master:
1) git add <filename> o . (todos los archivos y carpetas)
2) git commit -m "<mensaje>"
3) git push origin master

Crear branch y hacer push a branch
https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches
1) git checkout -b <branchName> <-Create branch in local machine
2) git push origin <branchName>	<-Make public the branch on github
3) git add <filename> o . (todos los archivos y carpetas)
4) git commit -m "<mensaje>"
5) git push origin <branch> 	<-Subir archivos a branch deseada

------
NECESARIO PAR CORRER psql:
1)Dar una contraseña a usario postgres(default): sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"

-----
NECESARIO Configurar para aceptar cualquier conexion A postgres

1)Modificar permisos archivo: postgresql.conf en /etc/postgresql/10/main
2)Modificar con nano: sudo nano /etc/postgresql/10/main/postgresql.conf
3)Buscar linea: ctrl+W buscar: "#listen_addresses" 
4)Quitar comentario y poner: listen_addresses = '*'
5)Guardar cambios: ctrl + o y enter sobre nombre de archivo a sobreescribir
6)Salir: ctrl + x 
7)Modificar archivo /etc/postgresql/10/main/pg_hba.conf de acuerdo a: https://stackoverflow.com/questions/29712228/node-postgres-get-error-connect-econnrefused
8)Desde root de terminal ejecutar: sudo /etc/init.d/postgresql restart
--------
TROUBLLESHOOTING

**Verificar errores
***1)-Verificar que servicio de postgresql este corriendo: (desde terminal normal) = pg_lsclusters
2)Star from program that controll postmster cluster:  1) sudo -i -> 2) pg_ctlcluster 10 main start

//Opcional: terminal linux : sudo service postgresql start  // 1) sudo -i -> 2) postgresql start

//Acceder como usuario a BDS desde terminal
sudo -u postgres psql postgres
sudo -u <usr> psql <database>