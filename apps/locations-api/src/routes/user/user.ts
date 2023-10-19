/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express';
import { deleteSingleUser, editSingleUser, getAllUsers, getSingleUser } from '../../controllers/userController';
import { User } from '../../models/User';
import { requireAdminSignIn, requireUserSignIn } from '../../middleware/require_auth';
const router = express();

// get all users
// get request
// /api/user/all
router.get('/all',requireAdminSignIn, getAllUsers);

// get single user
// get request
// /api/user/single/get?user_id=_id
router.get('/single',requireUserSignIn, getSingleUser);

// edit single user
// patch requerst
// /api/user/edit/?user_id=_id
router.patch('/single',requireUserSignIn, editSingleUser);

//delete user
// delete request
// /api/user/delete/?user_id-_id
router.delete('/delete',requireUserSignIn, deleteSingleUser)

export default router;
