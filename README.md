# API de la Cafetería del CRUI

API REST de productos con datos guardados en memoria.

## Ejecutar

```bash
npm install
npm start
```

Disponible en `http://localhost:3000`.

## Rutas

| Método | Ruta | Acción |
| --- | --- | --- |
| GET | `/` | Bienvenida |
| GET | `/api/productos` | Listar productos |
| GET | `/api/productos/:id` | Consultar producto |
| POST | `/api/productos` | Crear producto |
| PUT | `/api/productos/:id` | Modificar producto |
| DELETE | `/api/productos/:id` | Eliminar producto |

Datos inválidos responden `400`; productos inexistentes, `404`. En `capturas/` están las imágenes de casos exitosos y de error.
