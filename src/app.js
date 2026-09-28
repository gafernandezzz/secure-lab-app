const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const environment = process.env.APP_ENV || 'local';

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Secure Lab App', environment });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.listen(PORT, () => {
  console.log(`Secure Lab App escuchando en el puerto ${PORT}`);
});
