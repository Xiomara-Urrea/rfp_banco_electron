const User = require("../models/user");
const Account = require("../models/account");

const userController = {};

userController.getAllUsers = async (req, res) => {
    const user = await User.find();
    res.json(user);
};

userController.getByIdUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

userController.getByIdUserAccount = async (req, res) => {
    const user = await User.findById(req.params.id).populate('accounts').exec();
    res.json(user);
};

userController.createUser = async (req, res) => {
    const { firstName, lastName, username, password, user_id, email, phone } = req.body;

    const user = new User({
        firstName, lastName, username, password, user_id, email, phone,
    });

    await user.save((err, user) => {
        if (err) return res.json({ error: err });
        res.json({ status: "User Saved", user });
    });

};

userController.login = async (req, res) => {
    const { username, password } = req.body;

    await User.findOne({ username, password }, (err, user) => {
        if (err) return res.json({ error: err });
        if (user)
            res.json({ status: "User Logged", user });
        else
           throw res.json({ status: "Username or password is incorrect" });
    });

};

userController.updateUser = async (req, res) => {
    const { } = req.body;
    const userUpdate = {}

    await User.findByIdAndUpdate(req.params.id, userUpdate, { new: true }, (err, user) => {
        if (err) return res.json({ error: err });
        res.json({ status: "User Updated", user });
    });

};

userController.updateUserAccount = async (user_id, account) => {
    await User.findByIdAndUpdate(user_id,
        { "$push": { "accounts": account } },
        { "new": true, "upsert": true }, (err, user) => {
            if (err) throw err;
            console.log("#########", user);
        }
    );
};

// Pending Review
userController.deleteUser = async (req, res) => {
    try {
        let account_id = ''
        await User.findByIdAndRemove(req.params.id, (err, user) => {
            if (err) return res.json({ error: err });
            account_id = user.accounts;
        });
        await Account.findByIdAndRemove(account_id, (err, user) => {
            if (err) return res.json({ error: err });
            res.json({ status: "User Removed" });
        })
    } catch (error) {
        const message = error.message || error;
        res.json({ error: message });
    }

};

module.exports = userController;
