## JOBarcelona '22 | Back-end ##


_The code to decrypt the password is located in the path `src/helpers/password-pdf.js`



## Goals
_`JOBarcelona '22` has been created to meet the following specific needs:_

_✅ Task 1 → Connect to port: 3030 - COMPLETED_

_✅ Task 2 → The environment variables should not be uploaded to github, but there must be a template that allows knowing which ones are necessary. - COMPLETED_

_✅ Task 3 → The auth routes must allow users to register and log in: A route for registration /signup, A route for login /login. - COMPLETED_

_✅ Task 4 → Both the login route and the registration route must send the token to be able to enter the other routes. - COMPLETED_

_✅ Task 5 → In addition, a route is needed that returns the entire list of users so that they can control growth from the JOBX backoffice. This route must be protected and access will only be given to a user with the admin role and with the credentials that are encrypted in the document: route: /users. - COMPLETED_

_✅ Task 6 → A user has as mandatory parameters: username (must be unique), email (must follow the email pattern and be unique), password (must have a minimum of 8 characters, include a capital letter and a number). - COMPLETED_

_✅ EXTRA TASK → Crack PDF password - COMPLETED_

## Starting 🚀

_These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes._

### Pre requirements 📋

_For the project to work correctly, it is recommended to have a series of programs installed and configured properly:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js and npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Installation 🔧

_When you have cloned this project into your local repository remember to execute the following command in the terminal to install the dependencies and that everything works correctly:_
```
npm install
```

### Environment variables .env 🪛

_For the project to work correctly you have to enable the environment variables, for this you have to create a file with the name .env and enter the data you have in the .config.env template_


## Commands to run ⌨️

⚠️ BEFORE STARTING, REMEMBER TO HAVE THE MONGODB SERVER STARTED ⚠️

_Once all the necessary programs and dependencies are installed, just run the command:_
```
npm start
```
_Or you can also enter the command for the development version._
```
npm run dev
```

## when it start 🤔
_When the application starts, it will do the calculation to decrypt the PDF key, it will start the server and the users in the database and it will create the user with the admin role, which will have the next credentials:_
```
{
    "username": "jobx_admin",
    "email": "admin@jobx.com",
    "password": "aJOBX90_min25k.",
    "roles": ["admin"]
}
```
_The users that are entered by default in the database cannot be used to login, only in read mode, to test a user without an administrator role, create one from scratch._

## Endpoints 💻

_In the postman folder you have a json with all the configured endpoints._
_Also I leave them here:_
__
```
http://localhost:3030/auth/signup

Example for adding to body:
{
    "username": "Prueba",
    "email": "prueba@prueba.com",
    "password": "123$456aBcd",
    "roles": ["admin"]
}
```
```
http://localhost:3030/auth/login

Example for adding to body:
{
    "email": "prueba@prueba.com",
    "password": "123$456aBcd"
}
```
```
http://localhost:3030/users

(Add the token to the header authorization).
```

## Built with 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programming language used.
* [Node.js](https://nodejs.org/es/docs/) - Environment to run JavaScript on the server side.
* [Express](https://www.npmjs.com/package/express) - node.js framework.
* [NPM](https://www.npmjs.com/) - Dependency manager.
* [MongoDB](https://docs.mongodb.com/) - Non-relational database used for the project.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mechanism to be able to propagate between two parties, and safely.
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Module to encrypt passwords.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Library to use environment variables.


