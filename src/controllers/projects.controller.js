import { Project } from "../models/Project.js";

export const getProjects = (req, res) => {
  res.send("getProjects");
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  const newProject = await Project.create({ name, priority, description });
  console.log(newProject);
  res.send("creating project");
};

export const deleteProject = (req, res) => {
  res.send("deleting project");
};
