const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const app = express();
const { conn } = require('./db');
const { LoadDb } = require('./LoadDb/LoadDb');
config();

const PORT = process.env.PORT || 3000; // <== You can change the port

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes'));


conn.sync({ force: true }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("%s listening at " + PORT); // eslint-disable-line no-console
  });
});

// app.listen(PORT, () => {
//   console.log('✓ Servidor corriendo en el puerto ' + PORT);
// });