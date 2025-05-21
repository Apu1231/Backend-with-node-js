const express = require('express');
const User =  require("../models/user");
const { handleGetAllUsers, getUserById, lastNameUpdate, deleteUser, createUser} = require("../controllers/user");

const router = express.Router();


// Routes

router.get("/", handleGetAllUsers)


router.get("/:id", getUserById);

router.post("/", createUser);

router.patch("/api/users/:id", lastNameUpdate)

router.delete("/api/users/:id", deleteUser)

module.exports = 
   router
;