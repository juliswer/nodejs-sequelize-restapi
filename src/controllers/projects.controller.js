import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const { name, priority, description } = req.body;

    const newProject = await Project.create({ name, priority, description });

    res.status(200).json({
      message: "Project created successfully",
      data: newProject,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    await Project.destroy({
      where: { id },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { name, priority, description } = req.body;
    const { id } = req.params;
    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();
    res.status(200).json({
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findOne({
      where: { id },
    });

    res.status(202).json({ data: project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
