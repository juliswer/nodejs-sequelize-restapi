import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const res = await Project.delete({ id });
    console.log(res);

    res.send("deleting project");
  } catch (error) {
    console.log(error);
  }
};
