const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

let products = [
  { id: 1, name: 'Laptop', quantity: 5 },
  { id: 2, name: 'Mouse', quantity: 20 }
];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url} - ${new Date().toISOString()}`);
  next();
});


app.get('/products', (req, res) => {
  throw new Error('Prueba de error');
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).send('Producto no encontrado');
  }

  res.json(product);
});

app.post('/products', (req, res) => {
  console.log('BODY:', req.body);

  const { name, quantity } = req.body;

  // 🔴 Validar nombre
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'El nombre es obligatorio' });
  }

  // 🔴 Validar que quantity exista
  if (quantity === undefined || quantity === '') {
    return res.status(400).json({ error: 'La cantidad es obligatoria' });
  }

  // 🔴 Convertir a número
  const parsedQuantity = Number(quantity);

  // 🔴 Validar que sea número
  if (Number.isNaN(parsedQuantity)) {
    return res.status(400).json({ error: 'La cantidad debe ser numérica' });
  }

  // 🔴 Validar que no sea negativa
  if (parsedQuantity < 0) {
    return res.status(400).json({ error: 'La cantidad no puede ser negativa' });
  }

  const newProduct = {
    id: products.length + 1,
    name: name.trim(),
    quantity: parsedQuantity
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.use((err, req, res, next) => {
  console.error('ERROR:', err); // log del error

  res.status(500).json({
    error: 'Error interno del servidor'
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});