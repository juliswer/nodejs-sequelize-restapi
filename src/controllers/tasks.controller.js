import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();

    res.status(200).json({
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;

    const newTask = await Task.create({ name, done, projectId });

    res.status(200).json({
      message: "Task created successfully",
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
