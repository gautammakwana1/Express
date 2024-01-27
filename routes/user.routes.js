const express = require('express');
const userRoutes = express.Router();
const { registerUser, loginUser , getProfile, deleteUser, updateUser, updatePassword } = require('../controller/user.controller');
const { verifyToken } = require('../helpers/verifyToken');

userRoutes.post('/register',registerUser);  
userRoutes.post('/login',loginUser);
userRoutes.get('/profile',verifyToken,getProfile);
userRoutes.put('/update-profile',verifyToken,updateUser);
userRoutes.delete('/delete-profile',verifyToken,deleteUser);
userRoutes.put('/update-password',verifyToken,updatePassword);

module.exports = userRoutes;