const Poetry = require('../models/poetryModel');


const createPoetry = async (req, res) => {

    try {
        const data = await Poetry.create(req.body);

  
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

const getAllPoetries = async (req, res) => {
  try {
   const data = await Poetry.find()
   res.status(200).json({success: true, message: data});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = {
    createPoetry,
    getAllPoetries
};
