const http = require('http');
const express = require('express');

const app = express();
const port = 5000;

// Route pour la page d'accueil
app.get('/home', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil !');
  console.log('Tout fonctionne normalement');
});

// Route pour la page d'aide
app.get('/help', (req, res) => {
  res.send('Vous avez besoin d\'aide ? Contactez-nous !');
  console.error('Junior MEME entré au help du serveur...');
});

// Route par défaut (tout le reste)
app.get('*', (req, res) => {
  res.status(404).send('Désolé, cette page n\'existe pas.');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
