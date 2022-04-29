import { Router } from "express";
import {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject,
    getProjectTasks
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/projects", getProjects);

router.post("/projects", createProject);

router.delete("/projects/:id", deleteProject);

router.put("/projects/:id", updateProject);

router.get("/projects/:id", getProject);

router.get("/projects/:id/tasks", getProjectTasks)

export default router;
