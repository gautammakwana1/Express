const express = require('express');
const userRoutes = express.Router();
const { upload } = require('../helpers/imageUpload');
const { registerUser, loginUser, getProfile, deleteUser, updateUser, updatePassword } = require('../controller/user.controller');
const { verifyToken } = require('../helpers/verifyToken');

userRoutes.post('/register', upload.single('profileImage'), registerUser);
userRoutes.post('/login', loginUser);
userRoutes.get('/profile', verifyToken, getProfile);
userRoutes.put('/update-profile', verifyToken, updateUser);
userRoutes.delete('/delete-profile', verifyToken, deleteUser);
userRoutes.put('/update-password', verifyToken, updatePassword);

module.exports = userRoutes;