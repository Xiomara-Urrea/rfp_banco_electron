const Sample = require("../models/sample");
const fs = require("fs");

const sampleController = {};

sampleController.getAllSamples = async (req, res) => {
    const samples = await Sample.find();
    res.json(samples);
};

//  Credit.schema.pre
//  http://132.145.156.124:5000/recognition
sampleController.createSample = async (req, res) => {
    console.log(req.file)
    console.log(req.file.path)
    console.log(fs.readFileSync(req.file.path))
    // const sample = new Sample();
    // sample.img.data = fs.readFileSync(req.file.path)
    // sample.img.contentType = 'image/jpg';
  
    // sample.save();
};

module.exports = sampleController;