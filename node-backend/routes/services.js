const express = require("express");
const router = express.Router();
const Service = require("../models/Service");
const { protect, authorize } = require("../middleware/auth");

router.get("/user", protect, authorize(0, 1), async (req, res) => {
  try {
    const service = await Service.find({ user: req.user.id }).populate("user");
    res.status(200).json(service);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.get("/", protect, authorize(0, 1), async (req, res) => {
  try {
    const service = await Service.find().populate("user");
    res.status(200).json(service);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.get("/:id", protect, authorize(0, 1), async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate("user");
    res.status(200).json(service);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.post("/", protect, authorize(1), async (req, res) => {
  try {
    const { name, description, cost } = req.body;

    let service = new Service({
      name,
      description,
      cost,
      user: req.user.id,
    });

    await service.save();

    res.status(201).json(service);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.put("/:id", protect, authorize(1), async (req, res) => {
  try {
    let service = await Service.findById(req.params.id);

    if (!service)
      return res.status(401).json({ message: "There is no such service" });

    service.name = req.body.name || service.name;
    service.description = req.body.description || service.description;
    service.cost = req.body.cost || service.cost;

    await service.save();

    res.status(201).json(service);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.delete("/:id", protect, authorize(1), async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "The service has been deleted",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
