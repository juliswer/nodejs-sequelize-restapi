export const getProjects = (req, res) => {
  res.send("getProjects");
};

export const createProject = (req, res) => {
  console.log(req.body);
  res.send("creating project");
};

export const deleteProject = (req, res) => {
  res.send("deleting project");
};
