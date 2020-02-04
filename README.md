# MERN Stack Boilerplate
MongoDB - Express - React - NodeJS

MERN Stack with PassportJS (and JWT) for users auth and auto refresh on page loading !
___
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
You need to install these tools :
* [NodeJS](https://nodejs.org)
* [MongoDB](https://www.mongodb.com)
### Installing
After cloning the project, you must configure the url of your mongodb server here: `server/config/keys.js`

Like this :
```javascript
module.exports = {
  mongoURI: "YOUR_URL", // Example : mongodb://localhost:27017/mernapp
  secretOrKey: "secret"
};
```
Then you can execute commands to install the NPM modules and launch the project :
```
cd ./client/
npm i

cd ../server/
npm i

cd ../
npm i -g concurrently nodemon

npm run dev
```
## Built With
* [React](https://github.com/facebook/react) - Front library
* [NodeJS](https://nodejs.org) - Backend
* [Express](https://github.com/expressjs/express) - Web framework for the backend
* [Redux](https://github.com/reduxjs/redux) - Predictable state container for JavaScript apps
* [PassportJS](https://github.com/jaredhanson/passport) - Simple, unobtrusive authentication for NodeJS
* [JWT](https://github.com/auth0/node-jsonwebtoken) - JsonWebToken implementation for node.js
* [MongoDB](https://www.mongodb.com) - Database server
* And other...
## Authors
Alexandre MAUL
## License
This project is licensed under the MIT License