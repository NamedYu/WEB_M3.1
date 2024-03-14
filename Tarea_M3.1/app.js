const express = require('express');
const app = express();
const port = 4000;

const activoRouter = require('./activoControler.js');
const ubicacionRouter = require('./ubicacionControler.js');
const responsableRouter = require('./responsableControler.js');

app.use(express.json());

// Rutas para activos
app.get('/activos', activoRouter.mostrar);
app.get('/activos/byid/:id',activoRouter.buscarPorId);
app.get('/activos/bySerie/:serie',activoRouter.buscarPorNumeroSerie);
app.get('/activos/delete/:id',activoRouter.eliminarPorId);

// Rutas para ubicaciones
app.get('/ubicaciones', ubicacionRouter.mostrar);
app.get('/ubicaciones/byid/:id', ubicacionRouter.buscarUbicacionPorId);
app.get('/ubicaciones/delete/:id', ubicacionRouter.eliminarUbicacionPorId);
// // Rutas para responsables
app.get('/responsables', responsableRouter.mostrar);
app.get('/responsables/byid/:id', responsableRouter.buscarResponsablePorId);
app.get('/responsables/bynumem/:numem', responsableRouter.buscarResponsablePorNumeroEmpleado);
app.get('/responsables/delete/:id', responsableRouter.eliminarResponsablePorId);
app.get('/', (req, res) => {
    res.send("Bienvenido a mi WEB!");
});

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto:', port);
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err);
});
