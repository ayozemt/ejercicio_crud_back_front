const Trip = require("../models/Trip.model");

module.exports.list = async (req, res, next) => {
  try {
    const trips = await Trip.find().populate("tasks");
    return res.status(200).json(trips);
  } catch (error) {
    next(error);
  }
};

module.exports.detail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const trip = await Trip.findById(id).populate("tasks");
    return res.status(200).json(trip);
  } catch (error) {
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    if (!req.body.title)
      return res.status(400).json({ message: "Bad request" });
    const trip = await Trip.create(req.body);
    return res.status(201).json(trip);
  } catch (error) {
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const trip = await Trip.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(trip);
  } catch (error) {
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Trip.findByIdAndDelete(id);
    return res.status(200).json({ message: `Trip ${id} deleted` });
  } catch (error) {
    next(error);
  }
};
