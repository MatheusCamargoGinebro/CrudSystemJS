const express = require("express");

const tasksController = require("./controllers/tasksController");

const router = express.Router();
module.exports = router;



// Rotas
router.get("/tasks", tasksController.getAll);