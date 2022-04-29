import { Router } from "express";
import {
    getProjects,
    createProject,
    deleteProject
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/projects", getProjects);

router.post("/projects", createProject);

router.delete("/projects/:id", deleteProject);

router.put("/projects/:id", () => {});

router.get("/projects/:id", () => {});

export default router;
