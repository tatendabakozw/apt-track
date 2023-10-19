import { NextFunction, Request, Response } from 'express';

// add a bus stop
// post request
// /api/bus-stop/add
export const addNewLocation = async (
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

// get bus stops near  locaation
// get request
// /api/bus-stop/near/?lon=lon&lat=lat
export const getNearBusStop = async (
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

