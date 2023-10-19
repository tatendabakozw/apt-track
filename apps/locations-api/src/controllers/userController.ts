/* eslint-disable @typescript-eslint/ban-ts-comment */
import { User } from '../models/User';
import { NextFunction, Request, Response } from 'express';

// get all users
// get request
// /api/user/all
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // handling store schema
    const query = [];

    // handling search queries
    if (req.query.keyword && req.query.keyword != '') {
      query.push({
        $match: {
          $or: [
            { email: { $regex: req.query.keyword, $options: 'i' } },
            { username: { $regex: req.query.keyword, $options: 'i' } },
            { phoneNumber: { $regex: req.query.keyword, $options: 'i' } },
          ],
        },
      });
    }

    // handling sort
    if (req.query.sortBy && req.query.sortOrder) {
      const sort = {};
      //@ts-ignore
      sort[req.query.sortBy] = req.query.sortOrder == 'asc' ? 1 : -1;
      query.push({
        $sort: sort,
      });
    } else {
      query.push({
        $sort: { createdAt: -1 },
      });
    }

    query.push({
      $project: {
        password: 0,
        googleAuthId: 0,
        authMethod: 0,
        email_key: 0,
      },
    });

    const total = await User.countDocuments(query);
    //@ts-ignore
    const page = req.query.page ? parseInt(req.query.page) : 1;
    //@ts-ignore
    const perPage = req.query.perPage ? parseInt(req.query.perPage) : 16;
    const skip = (page - 1) * perPage;

    query.push({
      $skip: skip,
    });
    query.push({
      $limit: perPage,
    });

    const users = await User.aggregate(query);

    return res.status(200).send({
      message: 'users fetched sucessfully',
      length: users.length,
      meta: {
        total: total,
        currentPage: page,
        perPage: perPage,
        totalPages: Math.ceil(total / perPage),
      },
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

// get single user
// get request
// /api/user/single/get?user_id=_id
export const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ _id: req.query.user_id });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send({
      message: 'User found',
      user: {
        username: user.username,
        photoURL: user.photoURL,
        email: user.email,
        _id: user._id,
        phoneNumber: user.phoneNumber,
      },
    });
  } catch (error) {
    next(error);
  }
};

// edit single user
// patch requerst
// /api/user/edit/?user_id=_id
export const editSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, photoURL } = req.body;
    const edited_response = await User.findByIdAndUpdate(
      // @ts-ignore
      { _id: req.user.user_id },
      { username, photoURL }
    );

    return res
      .status(200)
      .send({ message: 'User edited successfully', response: edited_response });
  } catch (error) {
    next(error);
  }
};

// delete account
// delete request
// /api/user/delete/?user_id=_id
export const deleteSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_id, username } = req.query;
    const user = await User.findOne({ _id: user_id });
    if (username !== user.username) {
      return res.status(400).send({ message: 'queries do not match!' });
    }

    await User.findOneAndDelete({ _id: user_id });
    return res.status(200).send({ message: 'user deleted successfully!' });
  } catch (error) {
    next('error');
  }
};
