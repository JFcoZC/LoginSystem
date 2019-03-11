drop table PERMISSION;
drop table USERS;
drop table ROL;
create table ROL( rolId SERIAL PRIMARY KEY);
create table USERS( userId SERIAL PRIMARY KEY, rolId INTEGER REFERENCES ROL(rolId) );
create table PERMISSION( id SERIAL, pStr varchar(1000),type varchar(20), rolId INTEGER REFERENCES ROL(rolId),PRIMARY KEY (id,rolId)  );
