# Stock Manager REST API

API REST pour gérer un stock de produits. Développée avec **Node.js**, **Express**, et connectée à une base de données **mongodb**.


---

## Guide Utilisation

### Cloner le projet
```bash
git clone https://github.com/Sunu-byte-1/stock-manager-API
cd stock-manager-API
npm install
```

### config de mongo en local
```mongodb
mongosh
```
puis copier juste l'url jusqu'à / puis ajouter le nom de votre db

### Test avec POSTMAN
```postman
http://localhost:5000/api/produits/add
```
ajoutez du contenu **json** dans la section **raw** de postman 
```json
{
  "libelle" : "Ordinateur HP omen",
  "description" : "Ordinateur portable gamer ssd 1tb / ram 32gb / RTX3060",
  "prix" : 640000
}
```
puis envoyez la requette vous verrez une reponse du genre
```json
{
    "_id" : "ObjectId('68f268b42ddf9a4d8ccb5bfc')",
    "libelle" : "Ordinateur HP omen",
     "description" : "Ordinateur portable gamer ssd 1tb / ram 32gb / RTX3060",
    "prix" : 640000,
    "__v" : 0
  }
```

