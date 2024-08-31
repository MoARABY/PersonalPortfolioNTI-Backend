import experienceModel from "../models/experienceModel";
import asyncHandler from "express-async-handler";



const createExperience = asyncHandler(async (req:any, res:any) => {
    const {title, org, department, fromDate, toDate, description} = req.body;
    if(!title || !org || !department || !fromDate || !toDate || !description) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }
    const experience = await experienceModel.create(req.body);
    experience ? res.status(201).json(experience) : res.status(400).json({ message: 'Invalid experience data' });
});

const updateExperience = asyncHandler(async (req, res) => {
        const updatedExperience = await experienceModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        updatedExperience ? res.status(201).json(updatedExperience) : res.status(400).json({ message: 'Invalid experience data' });
});

const deleteExperience = asyncHandler(async (req, res) => {
    const deletedExperience = await experienceModel.findByIdAndDelete(req.params.id);
    deletedExperience ? res.status(201).json("Experience deleted successfully") : res.status(400).json({ message: 'Invalid experience data' });
});


export { createExperience, updateExperience, deleteExperience };