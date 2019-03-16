drop table PERMISSION;
drop table USERS;
drop table ROL;
create table ROL( rolId SERIAL PRIMARY KEY, name varchar(50) );
create table USERS( userId SERIAL PRIMARY KEY, password varchar(20),
username varchar(20),
rolId INTEGER REFERENCES ROL(rolId) );
create table PERMISSION( id SERIAL, pStr varchar(1000),type varchar(20), rolId INTEGER REFERENCES ROL(rolId),PRIMARY KEY (id,rolId)  );
INSERT INTO ROL (rolId, name) VALUES (DEFAULT,'Admin');
INSERT INTO USERS (userId,password,username,rolId) VALUES (DEFAULT,'root','root',1);
INSERT INTO USERS (userId,password,username,rolId) VALUES (DEFAULT,'paco','pass',1);