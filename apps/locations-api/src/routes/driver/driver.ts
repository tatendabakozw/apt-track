/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express';
import { Driver } from '../../models/Driver';
import { requireBusAdminSignIn } from '../../middleware/require_auth';
import { User } from '../../models/User';
const router = express.Router();

// create new driver
// post request
// /api/driver/add
router.post('/create', requireBusAdminSignIn, async (req, res, next) => {
  try {
    // @ts-ignore
    const _user = req.user;
    const { first_name, last_name, phone_number, national_id, email } =
      req.body;

    if (!first_name) {
      return res.status(500).send({ message: 'Please provide first name' });
    }
    if (!last_name) {
      return res.status(500).send({ message: 'Please provide lasat name' });
    }

    const adding_user = await User.findOne({ _id: _user._id });

    if (!adding_user) {
      return res.status(404).send({ message: 'Account not found' });
    }

    const newDriver = new Driver({
      first_name,
      last_name,
      phone_number,
      national_id,
      email,
      addedBy: adding_user._id,
    });

    const savedDriver = await newDriver.save();

    return res
      .status(200)
      .send({ message: 'New driver added', driiver: savedDriver });

    // console.log('creaate a  new driver');
  } catch (error) {
    next(error);
  }
});

// get all drivers for the company
// get request
// /api/driver/all
router.get('/all', requireBusAdminSignIn, async (req, res, next) => {
  try {
    const query = [];
    // @ts-ignore
    const _user = await User.findOne({ _id: req.user._id });

    query.push({
      $match: {
        addedBy: _user._id,
      },
    });

    // handling search queries
    if (req.query.keyword && req.query.keyword != '') {
      query.push({
        $match: {
          $or: [
            { name: { $regex: req.query.keyword, $options: 'i' } },
            { description: { $regex: req.query.keyword, $options: 'i' } },
            { category: { $regex: req.query.keyword, $options: 'i' } },
            { amount: { $regex: req.query.keyword, $options: 'i' } },
          ],
        },
      });
    }

    // handling sort
    if (req.query.sortBy && req.query.sortOrder) {
      const sort = {};
      // @ts-ignore
      sort[req.query.sortBy] = req.query.sortOrder == 'asc' ? 1 : -1;
      query.push({
        $sort: sort,
      });
    } else {
      query.push({
        //@ts-ignore
        $sort: { createdAt: -1 },
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
