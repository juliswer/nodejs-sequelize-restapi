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

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({
      where: { id },
    });
    if (!task) {
      throw new Error("Task not found");
    }
    res.status(200).json({
      data: task,
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

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, done, projectId } = req.body;

    const task = await Task.findByPk(id);

    if (!task) {
      throw new Error("Task not found");
    }

    task.name = name;
    task.done = done;
    task.projectId = projectId;
    await task.save();

    res.status(200).json({
      message: "Task updated successfully",
      data: task,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = Task.findByPk(id);
    if (!task) {
      throw new Error("Task not found");
    } else {
      await Task.destroy({
        where: { id },
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
