CREATE TABLE Users (
user_id (Primary Key)
first_name varchar(35)
last_name varchar(35)
username varchar(45)
email varchar(55)
password varchar(45)
)


CREATE TABLE Destinations(
    destination_id (Primary Key)
    name varchar(45)
    description varchar(225)
    country_name varchar(35)
)



CREATE TABLE Activites(
    activity_id (Primary Key)
    name varchar(55)
    description varchar(225)
    destination_id (Foreign Key)
)