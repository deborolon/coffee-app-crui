import express from 'express';

const app = express();
app.use(express.json());

const PUERTO = 8080;

app.listen(PUERTO, () => {
  console.log(`Servidor de la Cafetería del CRUI escuchando en http://localhost:${PUERTO}`);
});
