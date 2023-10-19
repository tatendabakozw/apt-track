/* eslint-disable @typescript-eslint/ban-ts-comment */
import { User } from '../models/User';
import { NextFunction, Request, Response } from 'express';


// get all users
// get request
// /api/user/all
export const getAllUsers = async (req:Request, res:Response, next:NextFunction) => {
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
        //@ts-ignore
        $sort: sort,
      });
    } else {
      query.push({
        //@ts-ignore
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
      //@ts-ignore
      $skip: skip,
    });
    query.push({
      //@ts-ignore
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
