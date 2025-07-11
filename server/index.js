const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const herramientaRoutes = require('./routes/herramientaRoutes');

mongoose.connect('mongodb://localhost:27017/tooltrack', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

app.use('/api/herramientas', herramientaRoutes);

app.listen(4000, () => console.log('Servidor corriendo en puerto 4000'));