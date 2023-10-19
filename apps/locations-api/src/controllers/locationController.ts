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
