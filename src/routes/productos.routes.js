import { Router } from 'express';

const router = Router();

const productos = [
	{ id: 1, nombre: 'Café con leche', precio: 1800, categoria: 'bebida' },
	{ id: 2, nombre: 'Medialuna', precio: 900, categoria: 'comida' },
	{ id: 3, nombre: 'Tostado de jamón y queso', precio: 3500, categoria: 'comida' },
	{ id: 4, nombre: 'Agua mineral', precio: 1200, categoria: 'bebida' },
];

function datosProductoValidos(body) {
	return body
		&& typeof body.nombre === 'string'
		&& body.nombre.trim() !== ''
		&& typeof body.precio === 'number'
		&& Number.isFinite(body.precio)
		&& body.precio > 0;
}

router.get('/', (req, res) => {
	res.status(200).json(productos);
});

router.get('/:id', (req, res) => {
	const producto = productos.find((item) => item.id === Number(req.params.id));

	if (!producto) {
		return res.status(404).json({ error: 'Producto no encontrado.' });
	}

	return res.status(200).json(producto);
});

router.post('/', (req, res) => {
	if (!datosProductoValidos(req.body)) {
		return res.status(400).json({ error: 'Nombre o precio inválido.' });
	}

	const producto = {
		id: Math.max(0, ...productos.map((item) => item.id)) + 1,
		nombre: req.body.nombre.trim(),
		precio: req.body.precio,
		categoria: req.body.categoria ?? '',
	};

	productos.push(producto);
	return res.status(201).json(producto);
});

router.put('/:id', (req, res) => {
	const producto = productos.find((item) => item.id === Number(req.params.id));

	if (!producto) {
		return res.status(404).json({ error: 'Producto no encontrado.' });
	}

	if (!datosProductoValidos(req.body)) {
		return res.status(400).json({ error: 'Nombre o precio inválido.' });
	}

	producto.nombre = req.body.nombre.trim();
	producto.precio = req.body.precio;
	if (req.body.categoria !== undefined) {
		producto.categoria = req.body.categoria;
	}

	return res.status(200).json(producto);
});

router.delete('/:id', (req, res) => {
	const index = productos.findIndex((item) => item.id === Number(req.params.id));

	if (index === -1) {
		return res.status(404).json({ error: 'Producto no encontrado.' });
	}

	const [producto] = productos.splice(index, 1);
	return res.status(200).json(producto);
});

export default router;
