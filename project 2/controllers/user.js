const User = require("../models/user");
const mongoose = require('mongoose');

async function handleGetAllUsers(req, res) {
    const allDbUser = await User.find({});
    return res.json(allDbUser);
}
async function createUser(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.jobTitle
    ) {
        return res.status(400).json({ msg: "Please provide all fields" })
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle
    })
    console.log("result", result);

    return res.status(201).json({ msg: "success" })
}
async function getUserById(req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ Status: "Invalid User ID" });
    }

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ Status: "User Not Found" });
    return res.json(user);
}
async function lastNameUpdate(req, res) {
    await User.findByIdAndUpdate(req.params.id), { lastName: "Changed" }
    return res.json({ Status: "success" })
}
async function deleteUser(req, res) {
    await User.findOneAndDelete(req.params.id)
    return res.json({ Status: "Deleted" })
}

module.exports = {
    handleGetAllUsers,
    getUserById,
    lastNameUpdate,
    deleteUser,
    createUser,
}
