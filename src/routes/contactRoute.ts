import Express from "express";
import {createContact , deleteContact} from "../controllers/contactController";
const router = Express.Router();



router.post('/',createContact)
router.delete('/admin/:id',deleteContact)


export default router