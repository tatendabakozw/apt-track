/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from 'express';
import { BusStop } from '../models/BusStop';
import { user } from '../types/User';

// add a bus stop
// post request
// /api/bus-stop/add
export const addNewLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { lon, lat, name, pictures } = req.body;
    // @ts-ignore
    const _user: user = req.user;
    if (!lon) {
      return res.status(400).send({ message: 'Enter latitude' });
    }
    if (!lat) {
      return res.status(400).send({ message: 'Enter latitude' });
    }
    if (!name) {
      return res.status(400).send({ message: 'Enter name' });
    }

    const newBusstop = new BusStop({
      name,
      photos: pictures,
      addedBy: _user._id,
      loc: {
        lon,
        lat,
      },
    });

    const savedBusStop = await newBusstop.save();

    return res.status(200).send({
      message: 'Bus stop saved successfully!',
      bus_stop: savedBusStop,
    });
  } catch (error) {
    next(error);
  }
};

// get bus stops near  locaation
// get request
// /api/bus-stop/near/?lon=lon&lat=lat
export const getNearBusStop = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = [];
    const { lon, lat } = req.body;

    query.push({
      $geoNear: {
        near: [lon, lat],
        // maxDistance: 500 * 1609,
        // key: 'myLocation',
        maxDistance: 100 * 1609.34,
        type: 'Point',
        spherical: true,
        distanceField: 'distance',
        // category: category,
        distanceMultiplier: 6371,
      },
    });

    // handling search queries
    if (req.query.keyword && req.query.keyword != '') {
      query.push({
        $match: {
          $or: [{ name: { $regex: req.query.keyword, $options: 'i' } }],
        },
      });
    }

    const total = await BusStop.countDocuments(query);
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
    const bus_stops = await BusStop.aggregate(query);

    return res.status(200).send({
      message: 'bus stops fetched sucessfully',
      length: bus_stops.length,
      meta: {
        total: total,
        currentPage: page,
        perPage: perPage,
        totalPages: Math.ceil(total / perPage),
      },
      bus_stops: bus_stops,
    });
  } catch (error) {
    next(error);
  }
};

// get all bus-stops
// get request
// /api/bus-stop/all
// for admins only
export const getAllBusStops = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // handling store schema
    const query = [];
  } catch (error) {
    next(error);
  }
};

// edit location
// patcch requeest
// /api/bus-stop/edit/?bus_stop_id=_id
export const editLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('add a bustop');
  } catch (error) {
    next(error);
  }
};

// delete location
// delete request
// /api/bus-stop/delete/?bus_stop_id=_id
export const deleteLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('add a bustop');
  } catch (error) {
    next(error);
  }
};
