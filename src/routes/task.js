import express from "express";
const router = express.Router();

// get task controller
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
  filterTask,
} from "../controllers/task.controller.js";
import verifyJwt from "../middlewares/PrivateAuthorization.js";

// use Middleware on all routes
router.use(verifyJwt);

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/filter", filterTask);

export default router;
