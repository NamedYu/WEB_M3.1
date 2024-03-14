// const express = require('express');
// const router = express.Router();

const Activo = require('../modulos/activo.js');
let listaActivos = [
    new Activo(1, '123456', 'INV-001', 'Computadora', 'Computadora de escritorio', 'Oficina 1', 'Juan Pérez', 'imagen1.jpg'),
    new Activo(2, '789012', 'INV-002', 'Mueble', 'Mesa de trabajo', 'Oficina 2', 'María López', 'imagen2.jpg'),
    new Activo(3, '345678', 'INV-003', 'Equipo electrónico', 'Teléfono móvil', 'Oficina 3', 'Pedro García', 'imagen3.jpg'),
    new Activo(4, '901234', 'INV-004', 'Herramienta', 'Destornillador', 'Almacén 1', 'Ana Martínez', 'imagen4.jpg'),
    new Activo(5, '567890', 'INV-005', 'Mobiliario', 'Silla de oficina', 'Oficina 4', 'Luisa Rodríguez', 'imagen5.jpg')
];

const mostrar = (req,res) => {
    res.json(listaActivos);
};
const buscarPorId = (req,res) => {
    if (listaActivos.findIndex(activo => activo.id == parseInt(req.params.id))!=-1) {
        res.json(listaActivos.find(activo => activo.id == parseInt(req.params.id)));
    } else {
        res.status(404).json({ error: 'Activo no encontrada' });
    }
}
const buscarPorNumeroSerie = (req,res) => {
    if(listaActivos.findIndex(activo => activo.numeroSerie == req.params.serie)!=-1){
        res.json(listaActivos.find(activo => activo.numeroSerie == req.params.serie));
    } else{
        res.status(404).json({ error: 'Activo no encontrada' });
    }
}
const eliminarPorId = (req,res) => {
    const index = listaActivos.findIndex(activo => activo.id == parseInt(req.params.id));

    if (index !== -1) {
        listaActivos.splice(index, 1);
        res.json(listaActivos); 
    } else {
        res.status(404).json({ error: 'No find' });
    }
}
module.exports = {
    mostrar,
    buscarPorId,
    buscarPorNumeroSerie,
    eliminarPorId
};
