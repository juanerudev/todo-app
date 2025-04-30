const mongoose = require('mongoose');

// Definimos el esquema (estructura) de una tarea
const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,      // Elimina espacios al inicio/final automáticamente
    },
    completed: {
      type: Boolean,
      default: false,  // Las tareas nuevas son incompletas por defecto
    },
  },
  {
    timestamps: true,   // Crea automáticamente createdAt y updatedAt
  }
);

// Exportamos el modelo para usarlo en las rutas
module.exports = mongoose.model('Task', TaskSchema);
