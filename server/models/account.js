const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
    numberAccount: { type: Number, default: 0 },
    stateAccount: { type: Boolean, default: false },
    valueAccount: { type: Number, default: 0 },
}, {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

// accountSchema.pre('save', function (next) {
//     let { valueCredit, valuePaid } = this;
//     this.percentagePaid = (valuePaid / valueCredit) * 100;
//     next();
// });

// this._update.$set.valueCredit
// this._update
// accountSchema.pre('findOneAndUpdate', function (next) {
//     let { valueCredit, valuePaid } = this._update;
//     let valueP = valuePaid ? valuePaid : 0;
//     this._update.percentagePaid = (valueP / valueCredit) * 100;
//     next();
// });

module.exports = mongoose.model('Account', accountSchema)