drop database if exists HOTEL;

create database HOTEL;

use HOTEL;

create table Hotel (
	num_hotel 		    int not null primary key,
	capacite_hotel 		int not null,
	categorie_hotel 	varchar(50) not null,
    nom_hotel 		    varchar(50) not null,
	adresse_hotel   	varchar(50) not null,
    num_station 		int not null references Station(num_station) 
);

create table Station (
	num_station		    int not null primary key,
	nom_station 	    varchar(50) not null
);

create table Chambre (
	num_chambre 		int not null,
	capacite_chambre 	tinyint not null,
	degre_confort    	varchar(50) not null,
    exposition 		    varchar(50) not null,
	type_chambre      	varchar(50) not null,
    num_hotel 	    	int not null references Hotel(num_hotel),
    constraint Chambre_PK primary key (num_chambre)
);

create table Client (
	num_client  		int not null,
	nom_client		    varchar(50) not null,
	prenom_client	    varchar(50) not null,
    adresse_client      varchar(50) not null,
    constraint Client_PK primary key (num_client)
);

create table Reservation (
	num_chambre 		int not null,
	num_client  		int not null,
	date_debut          datetime not null,
    date_fin            datetime not null,
    date_reservation    datetime not null,
    montant_arrhes      varchar(50) not null,
    prix_total          varchar(50) not null,
    constraint Reservation_PK primary key (num_chambre,num_client),
    constraint Reservation_Chambre_FK foreign key (num_chambre) references Chambre(num_chambre),
    constraint Reservation_Client_FK foreign key (num_client) references Client(num_client)
);
