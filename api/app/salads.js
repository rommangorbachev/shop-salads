const express = require('express');
const path = require('path');
const multer = require("multer");
const config = require("../config");
const {nanoid} = require("nanoid");
const Salad = require('../models/Salads')

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

router.get('/', async (req, res, next) => {
    try {
        const salads = await Salad.find();
        return res.send(salads);
    } catch (e) {
        return next(e);
    }
});

router.post('/', upload.single('image'), async (req, res, next) => {
    try {
        const saladData = {
            title: req.body.title,
            image: req.file.filename,
            destination: req.body.description
        }
        const salad = await  new Salad(saladData);
        await salad.save();
        return res.send(salad);
    } catch (e) {
        return next(e);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const removedSalad = await Salad.deleteOne({_id: req.params.id});
        res.send(removedSalad);
    } catch (e) {
        next(e);
    }
});


module.exports = router;