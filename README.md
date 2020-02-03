# MERN Stack Boilerplate
MongoDB - Express - React - NodeJS

Avec PassportJS utilisant JWT pour l'authentification des utilisateurs et auto rafraichissement des informations au changement de page.

## Démarrage
Modifier l'URL de votre serveur **MongoDB** dans server/config/keys
```javascript
module.exports = {
  mongoURI: "VOTRE_URL", // Exemple : mongodb://localhost:27017/mernapp
  secretOrKey: "secret"
};
```
___
```
cd ./client/
npm i

cd ../server/
npm i

cd ../
npm i -g concurrently nodemon

npm run dev
```

**Fait par Alexandre MAUL**