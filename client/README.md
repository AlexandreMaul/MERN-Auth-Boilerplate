# MERN Stack Boilerplate
MongoDB - Express - React - NodeJS

MERN Stack with PassportJS (and JWT) for users auth and auto refresh on page loading !
___
## Client part

### Presentation of files

#### Public folder
In the public folder ( `client/public/` ) you will find :
* `favicon.ico` - Website favicon.
* `index.html` - Index, used for import CSS from framework like [Bootstrap](https://getbootstrap.com/) but I recommand to use the react version of framework like [React-Bootstrap](https://react-bootstrap.github.io/). You can also setup other website properties such as "title".
* `manifest.json` - Describes your application and it's used by e.g. mobile phones if a shortcut is added to the homescreen.

#### Sources folder
In the source folder ( `client/src/` ) you will find :
* `actions/authActions.js` - Middleware file communicating with the API to manage authentication.
* `actions/types.js` - Type of actions for Redux managing authentication.
* `components/` - React props and page
* `components/private-route/PrivateRoute.js` - Route preventing non-logged-in users from accessing private pages and refreshing the information of the logged-in user.
* `reducers/` - Redux reducers
* `utils/setAuthToken.js` - Configure the axios header so that each request contains the JWT.
* `App.js` - Routing
* `index.js` - React basic rendering and verification of user authentication.
* `store.js` - Redux store file
## Authors
Alexandre MAUL
## License
This project is licensed under the MIT License