const http = require('http');
const express = require('express');

const app = express();
const port = 5000;

// Route pour la page d'accueil
app.get('/home', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil !');
  console.log('aucune erreur,tout fonctionne ');
});

// Route pour la page d'aide
app.get('/help', (req, res) => {
  res.send('Aide');
  console.error('Entree avec succes.');
});

// Route par défaut (tout le reste)
app.get('*', (req, res) => {
  res.status(404).send('Désolé, cette page n\'existe pas.');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
