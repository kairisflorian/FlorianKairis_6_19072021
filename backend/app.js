const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const Sauce = require('./models/Sauce');
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

// Paramétrage et connexion à la base de donnée
mongoose.connect('mongodb+srv://floriankairis:5JPyDvFlijgl1eSH@cluster0.y1z2b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



// Paramétrage des headers

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


let cors = require('cors')
app.use(cors())



app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', sauceRoutes);
app.use('/api/auth', userRoutes);




module.exports = app;