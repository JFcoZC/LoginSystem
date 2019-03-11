1) Setup a vagrant box with bionic64 (First time to generate the vagrantfile): 
vagrant init ubuntu/bionic64
2)Modify the Vagranfile generated to have the required servers

---- comandos vagrant ----
//cada vez que se modifica vagrant file: vagrant reload
**cada vez que se modifica vagrant file de la parte de comandos de shell de configuracion: vagrant reload --provision
//vagrant reload = vagrant destroy & vagrant up
Al elminar o agregar maquinas en documento hacer: vagrant destroy y luego vagrant up

vagrant destroy -f : Destruir todas las maquinas sin preguntar por confirmacion
vagrant suspend : Suspender maquinas para no apagarlas

https://www.webfoobar.com/node/52
vagrant halt : Apagar maquina sin perder configuracion
//Caragr box con base en archiv .box existente
vagrant package --output NOMBRE.box : Guardar toda una caja de vagrant en un archivo .box
vagrant add ubuntu/bionic64 NOMBRE.box
vagrant init ubuntu/bionic64

vagrant resume: Bring machines back into up state after: vagrant suspend o vagrant halt
