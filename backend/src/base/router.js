const express = require("express");

const tasksController = require("../controllers/tasksController");
const tasksMiddleware = require("../middlewares/tasksMiddleware");

const router = express.Router();
module.exports = router;



// Rotas
router.get("/tasks", tasksController.getAll);

router.post("/tasks", tasksMiddleware.validateBody, tasksController.createTask);

router.delete("/tasks/:id", tasksController.deleteTask);

router.put("/tasks/:id", tasksMiddleware.validateBody, tasksController.updateTask);