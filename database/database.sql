CREATE DATABASE userapi;
USE userapi;
CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100),
    surname VARCHAR(150),
	address VARCHAR(250),
	phone VARCHAR(15),
	email VARCHAR(100),
	birthdate DATE
);
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (1,'Della','Cox','4945 Lucky Duck Drive','412-862-8457','DellaDCox@superrito.com','10-12-1985');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (2,'Walter','Jeske','495 Rafe Lane','662-729-8758','WalterJJeske@armyspy.com','15-03-1951');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (3,'Ron','Plaza','4738 Woodside Circle','850-868-3521','RonAPlaza@dayrep.com','30-03-1990');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (4,'Emma','Kwak','4190 Tully Street','313-651-6614','EmmaAKwak@cuvox.de','03-12-1940');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (5,'Jimmy','Smith','3839 Fulton Street','304-405-5250','JimmyTSmith@jourrapide.com','25-02-1953');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (6,'Cecilia','Temple','4187 Arrowood Drive','904-495-3469','CeciliaGTemple@gustr.com','24-08-1987');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (7,'Ruth','Story','3474 White Oak Drive','816-761-4637','RuthPStory@dayrep.com','28-11-1963');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (8,'Brenda','Reynolds','1447 Viking Drive','740-782-7580','BrendaRReynolds@superrito.com','25-11-1955');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (9,'Rene','Lewis','2683 West Drive','312-495-7822','ReneSLewis@dayrep.com','22-06-1977');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (10,'Dale','Ward','4246 Rogers Street','513-587-4936','DaleCWard@superrito.com','13-07-1964');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (11,'Pamela','Gilman','496 Ritter Avenue','586-722-0839','PamelaMGilman@einrot.com','18-07-1935');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (12,'Clarence','Goebel','3475 Ferrell Street','218-353-1459','ClarenceWGoebel@armyspy.com','23-12-1993');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (13,'Michelle','Reed','1693 Green Gate Lane','443-715-2332','MichelleKReed@fleckens.hu','30-04-2000');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (14,'Louis','Martin','2993 Yorkshire Circle','252-287-8673','LouisKMartin@dayrep.com','16-03-1945');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (15,'Betty','Lance','677 Oakwood Avenue','212-635-3373','BettyKLance@gustr.com','09-07-1980');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (16,'Dean','Flood','2313 Swick Hill Street','980-581-8871','DeanLFlood@einrot.com','12-12-1950');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (17,'Ricardo','Clark','31 Browning Lane','607-988-3426','RicardoCClark@einrot.com','23-07-1995');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (18,'Devora','Walker','3661 Godfrey Street','503-617-8335','DevoraCWalker@gustr.com','25-10-1991');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (19,'Lisa','Toups','3389 Hinkle Deegan Lake Road','607-215-4985','LisaMToups@teleworm.us','09-11-1970');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (20,'James','OBrian','331 Neuport Lane','770-378-4374','JamesJOBrian@einrot.com','19-07-1935');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (21,'Marco','Dube','1779 Atha Drive','661-695-3020','MarcoPDube@rhyta.com','25-07-1939');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (22,'Deborah','Douglas','680 Stadium Drive','508-297-3773','DeborahDDouglas@teleworm.us','02-12-1959');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (23,'Charles','Hansen','2875 Euclid Avenue','805-303-4353','CharlesCHansen@dayrep.com','02-09-1999');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (24,'James','Glenn','4870 Edgewood Road','901-259-9658','JamesMGlenn@teleworm.us','07-07-1990');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (25,'Cindy','Paul','3156 Big Elm','816-840-3649','CindyJPaul@fleckens.hu','23-04-1994');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (26,'Mary','Hernandez','945 Hickman Street','630-421-0480','MaryBHernandez@teleworm.us','14-06-1939');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (27,'Nancy','Villarreal','4347 Todds Lane','210-465-6307','NancyNVillarreal@armyspy.com','21-09-1959');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (28,'Colby','Lincoln','426 Bryan Street','336-284-1978','ColbyVLincoln@superrito.com','04-08-1996');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (29,'Robert','Retzlaff','1858 Water Street','925-250-0317','RobertKRetzlaff@superrito.com','20-06-1951');
INSERT INTO users (id, name, surname, address, phone, email,birthdate) VALUES (30,'Donald','Schmidt','1925 Mattson Street','503-431-9711','DonaldBSchmidt@rhyta.com','27-11-1952');
