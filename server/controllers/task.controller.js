const Task = require("../models/Task.model");
const Trip = require("../models/Trip.model");

module.exports.list = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports.detail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    return res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    if (!req.body.task) return res.status(400).json({ message: "Bad request" });
    const task = await Task.create({ ...req.body, trip: req.params.id });
    return Trip.findByIdAndUpdate(
      req.params.id,
      { $push: { tasks: task._id } },
      { new: true }
    );
  } catch (error) {
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    return res.status(200).json({ message: `Task ${id} deleted` });
  } catch (error) {
    next(error);
  }
};
