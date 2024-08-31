import eduactionModel from '../models/educationModel';
import asyncHandler from 'express-async-handler';

const createEduaction = asyncHandler(async (req:any, res:any) => {
    const {title, org, department, degree, fromDate, toDate, description} = req.body;
    if(!title || !org || !department || !degree || !fromDate || !toDate || !description) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }
    const eduaction = await eduactionModel.create(req.body);
    eduaction ? res.status(201).json(eduaction) : res.status(400).json({ message: 'Invalid eduaction data' });
});

const updateEduaction = asyncHandler(async (req, res) => {
        const updatedEduaction = await eduactionModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        updatedEduaction ? res.status(201).json(updatedEduaction) : res.status(400).json({ message: 'Invalid eduaction data' });
});

const deleteEduaction = asyncHandler(async (req, res) => {
    const deletedEduaction = await eduactionModel.findByIdAndDelete(req.params.id);
    deletedEduaction ? res.status(201).json("Eduaction deleted successfully") : res.status(400).json({ message: 'Invalid eduaction data' });
});


export { createEduaction, updateEduaction, deleteEduaction };