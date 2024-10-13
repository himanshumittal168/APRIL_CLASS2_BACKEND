Agenda-     
            1. What is Db
            2. What is MongoDb
            3. What is mongoose
                3.1 Mongodb Compass
                3.2 MongoDB Shell
            4. What is MVC
            5. MongodbAtlas
            6. Make a small Todo Application 


q1. What is Db
a1. db-> DataBase - SQL, NON SQL
                    SQL-Structure Query Language
                    Data is stored in Tables   ->My SQl
                    NON SQL->  MongoDB
                
q3 What is mongoose  ->write in db, connect to db, update in db
    Express-Server---------(MONGOOSE)----------------Db(MongoDB)
    ODM-object Data Modelling

    Node.js -Data is treated as object  // JSON
    Mongodb-data is treated as document

3.1 MongoDB Compass-> GUI graphical User Interface 
3.2 Shell - Command ,it is difficult

    
IMPORTANT
<!-- MVC -->

MODEL->Represent the structure of data,   (SCHEMA)
       Formate and constraint with which it is stored.

Controller -> Controls the request of user and generated appropriate response, 

View -> What is presented to user, 
        Ultilize the model and present data in form user want to see.



MongodbAtlas-> Cloud DB





WHY MVC 
    Readability,
    Reuseability,
    Easy to debug



Date-13-Oct-2024
MVC - MODEL VIEW CONTROLLER

MODEL- Schema || Data formate || data constrains

Controller- Control the request and take action

View- Show Data as user need


MONDODB
Mongoose? - ODM Library Object data modelling



Express ------------(MONGOOSE)-------------MONGODB

Schema- type of data, constraint , required or not?

Status Codes
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)  
// Server error responses (500 – 599)

    Agenda-> 1. Re- strucutre of code
                    1.1 env
            2. Write more controller CRUD  created read update delete(Todos)
            3. params 