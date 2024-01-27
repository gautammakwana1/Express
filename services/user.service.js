const User = require(`../models/user.model`);

module.exports = class UserServices {
    //create User / Register user
    async addNewUser(body) {
        try {
            return await User.create(body)
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    async getUser(body) {
        try {
            return await User.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    async getUserById(id) {
        try {
            return await User.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    async updateUser(id, body) {
        try {
            return await User.findByIdAndUpdate(id, { $set: body }, { new: true });
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
};