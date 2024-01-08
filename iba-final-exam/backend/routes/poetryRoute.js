const express = require('express');
const { createPoetry, getAllPoetries } = require('../controller/poetryController');

const router = express.Router();

router.post("/createPoetry", createPoetry);
router.get("/getPoetry", getAllPoetries)

module.exports = router;