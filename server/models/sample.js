const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const SampleSchema = new Schema({
    img: { data: Buffer, contentType: String }
},
    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('Sample', SampleSchema);
