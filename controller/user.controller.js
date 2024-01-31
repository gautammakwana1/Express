const UserServices = require('../services/user.service');
const userService = new UserServices();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        let user = await userService.getUser({ email: req.body.email });
        if (user) {
            return res.json({ message: "User is already exist.." });
        }
        if(req.file){
            console.log(req.file);
            req.body.profileImage = req.file.path;
        }
        let hashpassword = await bcrypt.hash(req.body.password, 10);
        // console.log(hashpassword);
        user = await userService.addNewUser({ ...req.body, password: hashpassword });
        res.status(201).json({ user, message: "New User Register Successful..." });
    } catch (error) {
        console.log(error, "from registerUser controller");
        res.json({ message: "Internal server error" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        let user = await userService.getUser({ email: req.body.email, isDelete: false });
        // console.log(user);
        if (!user) {
            return res.json({ message: "User Not Found.." });
        }
        let comparepassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparepassword) {
            return res.json({ message: "Password Not Matched" });
        }
        let payLoad = {
            userId: user._id
        }
        // console.log("Payload is => ",payLoad);
        let token = jwt.sign(payLoad, 'Gautam');
        // console.log("Token is => ",token);
        res.status(201).json({ token, message: "Login Successfully.." });
    } catch (error) {
        console.log(error, "from loginUser controller");
        res.json({ message: "Internal server error" });
    }
};

exports.getProfile = async (req, res) => {
    try {
        let user = req.user;
        // console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.log(error, "from getProfile controller");
        res.json({ message: 'Internal Server Error ' })
    }
};

exports.updateUser = async (req, res) => {
    try {
        let user = await userService.getUserById(req.user._id);
        if (!user) {
            return res.json({ message: 'User is not found' });
        }
        user = await userService.updateUser(user._id, { ...req.body });
        res.json({ user, message: "User Update success!!!" });
    } catch (error) {
        console.log(error, "from updateUser controller");
        res.json({ message: 'Internal Server Error ' })
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let user = await userService.getUserById(req.user._id);
        if (!user) {
            return res.json({ message: 'User is not found' });
        }
        user = await userService.updateUser(user._id, { isDelete: true });
        res.json({ message: "User delete success!!!" });
    } catch (error) {
        console.log(error, "from deleteUser controller");
        res.json({ message: 'Internal Server Error ' })
    }
};

exports.updatePassword = async (req, res) => {
    try {
        let user = await userService.getUserById(req.user._id);
        // console.log(user);
        if (!user) {
            return res.json({ message: "User is not found" });
        }
        let comparepassword = await bcrypt.compare(req.body.oldPassword, user.password);
        let old = req.body.oldPassword;
        // console.log("old Pass => " ,old);
        if (!comparepassword) {
            return res.json({ message: "old Password Is Not Matched" });
        };
        let newPass = req.body.newPassword;
        // console.log("New Pass => ",newPass);
        if (old == newPass) {
            return res.json({ message: "oldPassword And NewPassword Is same please enter different password. " });
        };
        let confirm = req.body.confirmPassword;
        // console.log("New confirm Pass => ", confirm);
        if (newPass !== confirm) {
            return res.json({ message: "New Password does not matched.." });
        };
        // console.log(req.query.newPassword);
        let hashpassword = await bcrypt.hash(confirm, 10);
        // console.log(hashpassword);
        user = await userService.updateUser(user._id, { password: hashpassword });
        return res.json({ message: "Password is changed successful..." });
    } catch (error) {
        console.log(error, "from updatePassword controller");
        res.json({ message: 'Internal Server Error ' });
    }
};
