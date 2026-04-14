import Task from "../models/taskModel.js";
import asyncHandler from "../utils/asyncHandler.js";

// @desc Get all tasks
// @route GET /api/tasks
export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// @desc Create task
// @route POST /api/tasks
export const createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    res.status(400);
    throw new Error("Title is required");
  }

  const task = await Task.create({ title, description });

  res.status(201).json(task);
});

// @desc Update task
export const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.completed = req.body.completed ?? task.completed;

  const updated = await task.save();

  res.json(updated);
});

// @desc Delete task
export const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  await task.deleteOne();

  res.json({ message: "Task removed" });
});
