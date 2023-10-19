import express, { NextFunction, Request, Response } from 'express';
import { addNewLocation } from '../../controllers/locationController';
const router = express();

// add a bus stop
// post request
// /api/bus-stop/add
router.post('/add',addNewLocation);

// get bus stops near  locaation
// get request
// /api/bus-stop/near/?lon=lon&lat=lat
router.get('/near', async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('add a bustop');
  } catch (error) {
    next(error);
  }
});

// edit location
// patcch requeest
// /api/bus-stop/edit/?bus_stop_id=_id
router.patch(
  '/edit',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('location items');
    } catch (error) {
      next(error);
    }
  }
);

// delete location
// delete request
// /api/bus-stop/delete/?bus_stop_id=_id
router.delete(
  '/delete',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('delete a route');
    } catch (error) {
      next(error);
    }
  }
);

export default router
