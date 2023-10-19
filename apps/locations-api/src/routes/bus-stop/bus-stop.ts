import express from 'express';
const router = express();
import {
  addNewLocation,
  deleteLocation,
  editLocation,
  getAllBusStops,
  getNearBusStop,
} from '../../controllers/busStopController';
import { requireBusAdminSignIn } from '../../middleware/require_auth';

// add a bus stop
// post request
// /api/bus-stop/add
router.post('/add', requireBusAdminSignIn, addNewLocation);

// get bus stops near  locaation
// get request
// /api/bus-stop/near/?lon=lon&lat=lat
router.post('/near', getNearBusStop);

// get all bus-stops
// get request
// /api/bus-stop/all/?owner_id=_id
router.post('/all',requireBusAdminSignIn, getAllBusStops);

// edit location
// patcch requeest
// /api/bus-stop/edit/?bus_stop_id=_id
router.patch('/edit', editLocation);

// delete location
// delete request
// /api/bus-stop/delete/?bus_stop_id=_id
router.delete('/delete', deleteLocation);

export default router;
