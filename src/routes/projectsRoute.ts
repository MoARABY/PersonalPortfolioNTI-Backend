import Express from "express";
import { getProjects, createProject, updateProject, deleteProject } from "../controllers/projectsController";
import upload from "../utils/upload";
import verifyBearer from "../utils/verifyBearer";
const router = Express.Router();



router.get("/", getProjects);
router.post("/admin/", verifyBearer, upload.single("projectImage"), createProject);
router.put("/admin/:id", verifyBearer, upload.single("projectImage"), updateProject);
router.delete("/admin/:id", verifyBearer, deleteProject);


export default router;
