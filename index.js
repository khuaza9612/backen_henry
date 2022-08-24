const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const app = express();
const  sequelize = require('./db');

config();

const port = process.env.PORT || 3000; // <== You can change the port

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes'));

sequelize.sync({ force: false }).then(() => {
  console.log('✓ Se conectó a la base de datos');
});

app.listen(port, () => {
  console.log('✓ Servidor corriendo en el puerto ' + port);
});
