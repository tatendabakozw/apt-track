/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express';
import { getAllUsers } from '../../controllers/userController';
import { User } from '../../models/User';
const router = express();

// get all users
// get request
// /api/user/all
router.get('/all', getAllUsers);

// get single user
// get request
// /api/user/single/get?user_id=_id
router.get('/single', async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.query.user_id });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send({ message: 'User found', user });
  } catch (error) {
    next(error);
  }
});

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
