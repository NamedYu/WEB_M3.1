const express = require('express');
const app = express();
const port = 4000;

const activoRouter = require('./controladores/activoControler.js');
const ubicacionRouter = require('./controladores/ubicacionControler.js');
const responsableRouter = require('./controladores/responsableControler.js');
const activo = require('./modulos/activo.js');

app.use(express.json());

// Rutas para activos
app.get('/activos', activoRouter.mostrar);
app.get('/activos/byid/:id',activoRouter.buscarPorId);
app.get('/activos/bySerie/:serie',activoRouter.buscarPorNumeroSerie);
app.delete('/activos/:id',activoRouter.eliminarPorId);
app.put('/activos/:id',activoRouter.actualizarActivo);
app.post('/activos',activoRouter.agregarNuevoActivo);
app.patch('/activos/:id',activoRouter.updateActivo);
// Rutas para ubicaciones
app.get('/ubicaciones', ubicacionRouter.mostrar);
app.get('/ubicaciones/byid/:id', ubicacionRouter.buscarUbicacionPorId);
app.delete('/ubicaciones/:id', ubicacionRouter.eliminarUbicacionPorId);
app.put('/ubicaciones/:id',ubicacionRouter.actualizarUbicacion);
app.post('/ubicaciones',ubicacionRouter.agregarNuevaUbicacion);
app.patch('/ubicaciones/:id',ubicacionRouter.updateUbicacion);
// // Rutas para responsables
app.get('/responsables', responsableRouter.mostrar);
app.get('/responsables/byid/:id', responsableRouter.buscarResponsablePorId);
app.get('/responsables/bynumem/:numem', responsableRouter.buscarResponsablePorNumeroEmpleado);
app.delete('/responsables/:id', responsableRouter.eliminarResponsablePorId);
app.put('/responsables/:id',responsableRouter.actualizarResponsable);
app.post('/responsables',responsableRouter.agregarNuevoResponsable);
app.patch('/responsables/:id',responsableRouter.updateResponsable);
app.get('/', (req, res) => {
    res.send("Bienvenido a mi WEB!");
});

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto:', port);
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err);
});
