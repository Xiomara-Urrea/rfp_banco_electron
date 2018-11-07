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
    updateAccountRC(req, res, "CONSIG");

};

accountController.updateAccountRetire = async (req, res) => {
    updateAccountRC(req, res, "RETIRE");
};

accountController.updateAccountTransfer = async (req, res) => {
    const { valueAccount, numberAccountOne, numberAccountTwo } = req.body;

    const accountOne = await Account.findOne({ numberAccount: numberAccountOne });
    const accountTwo = await Account.findOne({ numberAccount: numberAccountTwo });
    let valueAccountOne = Number(accountOne.valueAccount) - Number(valueAccount);;
    let valueAccountTwo = Number(accountTwo.valueAccount) + Number(valueAccount);

    await Account.findOneAndUpdate({ numberAccount: numberAccountOne }, { valueAccount: valueAccountOne }, { new: true }, (err, account) => {
        if (err) return res.json({ error: err });
        // res.json({ status: "Account Updated", account });
    });
    await Account.findOneAndUpdate({ numberAccount: numberAccountTwo }, { valueAccount: valueAccountTwo }, { new: true }, (err, account) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Account Updated", account });
    });
};

const updateAccountRC = async (req, res, update) => {
    const { valueAccount, numberAccount } = req.body;
    const account = await Account.findOne({ numberAccount });
    let value = 0;
    if (update == "RETIRE") {
        value = Number(account.valueAccount) - Number(valueAccount);;
    } else {
        value = Number(account.valueAccount) + Number(valueAccount);
    }

    await Account.findOneAndUpdate({ numberAccount: numberAccount }, { valueAccount: value }, { new: true }, (err, account) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Account Updated", account });
    });
}

module.exports = accountController;

