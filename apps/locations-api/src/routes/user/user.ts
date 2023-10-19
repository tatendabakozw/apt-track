/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express';
import { getAllUsers, getSingleUser } from '../../controllers/userController';
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
// /api/user/edit
router.patch('/single', async (req, res, next) => {
  try {
    console.log('edit single user');
  } catch (error) {
    next(error);
  }
});

export default router;
