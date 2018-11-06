const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    user_id: { type: String, required: true },
    accounts: [{
        type: Schema.Types.ObjectId,
        ref: 'Account',
        default: []
    }]
},
    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('User', UserSchema);
