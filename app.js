import express from 'express';
import productosRouter from './src/routes/productos.routes.js';

export const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de la Cafetería del CRUI.');
});

app.use('/api/productos', productosRouter);

