import Express from "express";
import projectsModel from "../models/projectsModel";
import servicesModel from "../models/servicesModel";
import contactModel from "../models/contactModel";
const router = Express.Router();
import AsyncHandler from 'express-async-handler';


router.get('/',AsyncHandler(async(req,res)=>{
    const projects = await projectsModel.find();
    const services = await servicesModel.find();
    const contacts = await contactModel.find();
    // const blogs = await blogModel.find();
    res.status(200).json({
        status:'success',
        projects,
        services,
        contacts
    })
}))


export default router