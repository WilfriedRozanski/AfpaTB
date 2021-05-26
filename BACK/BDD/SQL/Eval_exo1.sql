drop database if exists `exo1`;

create database `exo1`;

use `exo1`;

create table `Client` (
	`cli_num`       	int not null,
	`cli_nom` 		    varchar(50) not null,
	`cli_adresse` 	    varchar(50),
    `cli_tel`           varchar(30),
    primary key (`cli_num`)
);

create table `Produit` (
	`pro_num`       		int not null,
	`pro_libelle`		    varchar(50) not null,
	`pro_description`	    varchar(50) not null,
    primary key (`pro_num`)
);

create table `Commande` (
	`com_num`      		    int not null,
    `cli_num`       		int not null,
    `com_date`              datetime not null,
    `com_obs`               varchar(50) not null,
    primary key (`com_num`),
    foreign key (`cli_num`) references `Client`(`cli_num`)
);

create table `est_compose` (
	`com_num` 		int not null,
	`pro_num`  		int not null,
	`est_qte`       int not null,
    primary key (`com_num`,`pro_num`),
    foreign key (`com_num`) references `Commande`(`com_num`),
    foreign key (`pro_num`) references `Produit`(`pro_num`)
);

create index `I_cli_nom` on `Client`(`cli_nom`);