import Express from "express";
import { getService, getServices, createService, updateService, deleteService } from "../controllers/servicesController";
import upload from "../utils/upload";
import verifyBearer from "../utils/verifyBearer";
const router = Express.Router();



router.get("/", getServices);
router.get("/:id", getService);
router.post("/admin/", verifyBearer, upload.single("serviceImage"), createService);
router.put("/admin/:id", verifyBearer, upload.single("serviceImage"), updateService);
router.delete("/admin/:id", verifyBearer, deleteService);


export default router;
