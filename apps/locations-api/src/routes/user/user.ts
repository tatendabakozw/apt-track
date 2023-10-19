/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express';
import { editSingleUser, getAllUsers, getSingleUser } from '../../controllers/userController';
import { User } from '../../models/User';
const router = express();

// get all users
// get request
// /api/user/all
router.get('/all', getAllUsers);

// get single user
// get request
// /api/user/single/get?user_id=_id
router.get('/single', getSingleUser);

// edit single user
// patch requerst
// /api/user/edit/?user_id=_id
router.patch('/single', editSingleUser);

export default router;
