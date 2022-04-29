import { Router } from "express";
import {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/projects", getProjects);

router.post("/projects", createProject);

router.delete("/projects/:id", deleteProject);

router.put("/projects/:id", updateProject);

router.get("/projects/:id", getProject);

export default router;
