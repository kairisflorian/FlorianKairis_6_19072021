const Sauce = require('../models/Sauce');

// Création d'une nouvelle sauce
exports.createSauce = ('/', (req, res, next) => {
    delete req.body.sauce._id;
    const sauce = new Sauce({
      ...req.body
    });
    sauce.save()
      .then(() => res.status(201).json({ message: 'Nouvelle sauce enregistrée !'}))
      .catch(error => res.status(400).json({ error }));
});

// Récupération d'une sauce spécifique dans la base de donnée 
exports.getOneSauce = ('/:id', (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(404).json({ error }));
});

// Modifier une sauce
exports.modifySauce = ('/:id', (req, res, next) => {
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Sauce modifiée !'}))
      .catch(error => res.status(400).json({ error }));
});

// Suppression d'une sauce de la base de donnée
exports.deleteSauce = ('/:id', (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Sauce supprimée !'}))
      .catch(error => res.status(400).json({ error }));
});
  
// Récupération du tableau des sauces dans la base de donnée
exports.getAllSauces = ('/'+'', (req, res, next) => {
    Sauce.find()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({ error }));
});