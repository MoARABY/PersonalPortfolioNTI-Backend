import skillsModel from '../models/skillsModel';
import asyncHandler from 'express-async-handler';


const createSkill = asyncHandler(async (req:any, res:any) => {
    const {name, level} = req.body;
    if(!name || !level) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }
    const skill = await skillsModel.create(req.body);
    skill ? res.status(201).json(skill) : res.status(400).json({ message: 'Invalid skill data' });
});

const updateSkill = asyncHandler(async (req, res) => {
        const updatedSkill = await skillsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        updatedSkill ? res.status(201).json(updatedSkill) : res.status(400).json({ message: 'Invalid skill data' });
});

const deleteSkill = asyncHandler(async (req, res) => {
    const deletedSkill = await skillsModel.findByIdAndDelete(req.params.id);
    deletedSkill ? res.status(201).json("Skill deleted successfully") : res.status(400).json({ message: 'Invalid skill data' });
});

export { createSkill, updateSkill, deleteSkill };