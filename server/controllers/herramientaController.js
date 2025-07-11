const Herramienta = require('../models/herramienta');

exports.getAll = async (req, res) => res.json(await Herramienta.find());
exports.create = async (req, res) => res.status(201).json(await new Herramienta(req.body).save());
exports.update = async (req, res) => res.json(await Herramienta.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req, res) => res.json(await Herramienta.findByIdAndDelete(req.params.id));