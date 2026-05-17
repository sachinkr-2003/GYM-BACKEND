const Plan = require('../models/Plan');
const Trainer = require('../models/Trainer');
const Service = require('../models/Service');
const Schedule = require('../models/Schedule');

// --- PLANS ---
const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find({});
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createPlan = async (req, res) => {
  try {
    const plan = new Plan(req.body);
    await plan.save();
    res.status(201).json({ success: true, data: plan });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updatePlan = async (req, res) => {
  try {
    const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, data: plan });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deletePlan = async (req, res) => {
  try {
    await Plan.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Plan deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- TRAINERS ---
const getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find({});
    res.status(200).json(trainers);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createTrainer = async (req, res) => {
  try {
    const trainerData = { ...req.body };
    if (req.file) {
      trainerData.image = `/uploads/${req.file.filename}`;
    }
    const trainer = new Trainer(trainerData);
    await trainer.save();
    res.status(201).json({ success: true, data: trainer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateTrainer = async (req, res) => {
  try {
    const trainerData = { ...req.body };
    if (req.file) {
      trainerData.image = `/uploads/${req.file.filename}`;
    }
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, trainerData, { new: true });
    res.status(200).json({ success: true, data: trainer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteTrainer = async (req, res) => {
  try {
    await Trainer.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Trainer deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- SERVICES ---
const getServices = async (req, res) => {
  try {
    const services = await Service.find({});
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createService = async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Service deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// --- SCHEDULE ---
const getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.find({});
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createSchedule = async (req, res) => {
  try {
    const schedule = new Schedule(req.body);
    await schedule.save();
    res.status(201).json({ success: true, data: schedule });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, data: schedule });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteSchedule = async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Schedule item deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getPlans, createPlan, updatePlan, deletePlan,
  getTrainers, createTrainer, updateTrainer, deleteTrainer,
  getServices, createService, updateService, deleteService,
  getSchedule, createSchedule, updateSchedule, deleteSchedule
};
