import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
  }
};
