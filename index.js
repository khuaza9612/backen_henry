const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const app = express();
const { conn } = require('./db');
const { LoadDb } = require('./LoadDb/LoadDb');

config();

const port = process.env.PORT || 3001; // <== You can change the port

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes'));

conn.sync({ force:false }).then(() => {
  app.listen(3001, () => {
   //oadDb();
    console.log('✓ Se conectó a la base de datos');
  })
});

app.listen(port, () => {
  console.log('✓ Servidor corriendo en el puerto ' + port);
});