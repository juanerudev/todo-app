const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Lista de dominios permitidos (añade aquí tu frontend en Vercel)
const allowedOrigins = [
  'https://todo-guxikb0au-juanerudevs-projects.vercel.app',
];

// Middleware CORS con whitelist
app.use(cors({
  origin: (origin, callback) => {
    // Permitir requests sin origen (como curl o Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error('Not allowed by CORS'));
  },
}));

// Otros middlewares
app.use(express.json());

// Rutas de la API
app.use('/api/tasks', taskRoutes);

// Ruta básica
app.get('/', (req, res) => {
  res.send('API is running...');
});

console.log('Connecting to MongoDB...');

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
