const Account = require("../models/account");

const accountController = {};

accountController.getAllAccount = async (req, res) => {
    const account = await Account.find();
    res.json(account);
};

accountController.getByIdAccount = async (req, res) => {
    const account = await Account.findById(req.params.id);
    res.json(account);
};

// query = { _id: req.params.id };
// console.log(moment(credit.startDate).format("DD/MM/YYYY HH:mm"))
accountController.updateAccount = async (req, res) => {
    const { addCredit, valueCredit, endDate, startDate } = req.body;
    const creditUpdate = {
        addCredit: addCredit,
        valueCredit: valueCredit,
        startDate: Date(startDate),
        endDate: Date(endDate)
    };
    const options = { new: true, runValidators: true };

    await Account.findByIdAndUpdate(req.params.id, creditUpdate, options, (err, account) => {
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

