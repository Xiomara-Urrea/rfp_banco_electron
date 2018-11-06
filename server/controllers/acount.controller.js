const Account = require("../models/account");
const User = require("../models/user");

const accountController = {};

accountController.getAllAccount = async (req, res) => {
    const account = await Account.find();
    res.json(account);
};

accountController.getByIdAccount = async (req, res) => {
    const account = await Account.findById(req.params.id);
    res.json(account);
};

accountController.createAccount = async (req, res) => {
    const { numberAccount, stateAccount, valueAccount, user_id } = req.body;
    
    const accountModel = new Account({
        numberAccount, stateAccount, valueAccount
    });

    await accountModel.save((err, account) => {
        if (err) return res.json({ error: err });
        if (account) {
            User.findByIdAndUpdate(user_id,
                { "$push": { "accounts": accountModel } },
                { "new": true, "upsert": true }, (err, user) => {
                    if (err) throw err;
                }
            );
        }
        res.json({ status: "Account Saved", account });
    });
};

// query = { _id: req.params.id };
accountController.updateAccount = async (req, res) => {
    const { } = req.body;
    const accountUpdate = {

    };

    const options = { new: true, runValidators: true };

    await Account.findByIdAndUpdate(req.params.id, accountUpdate, options, (err, account) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Account Updated", account });
    });
};

accountController.updateAccountConsign = async (req, res) => {
    updateAccountRC(req, res);

};

accountController.updateAccountRetire = async (req, res) => {
    updateAccountRC(req, res);
};

accountController.updateAccountTransfer = async (req, res) => {
    const { valueAccount, valueAccountOne, valueAccountTwo, numberAccountOne, numberAccountTwo } = req.body;

    await Account.findOneAndUpdate({ _id: numberAccountOne }, { valueAccount: valueAccountOne }, { new: true }, (err, account) => {
        if (err) return res.json({ error: err });
        // res.json({ status: "Account Updated", account });
    });
    await Account.findOneAndUpdate({ _id: numberAccountTwo }, { valueAccount: valueAccountTwo }, { new: true }, (err, account) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Account Updated", account });
    });
};

const updateAccountRC = async (req, res) => {
    const { valueAccount, stateAccount, numberAccount } = req.body;

    await Account.findByIdAndUpdate(req.params.id, { valueAccount, stateAccount, numberAccount }, { new: true }, (err, account) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Account Updated", account });
    });
}



module.exports = accountController;

