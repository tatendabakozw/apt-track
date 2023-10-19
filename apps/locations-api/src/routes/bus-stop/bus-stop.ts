import express from 'express';
import {
  addNewLocation,
  deleteLocation,
  editLocation,
  getNearBusStop,
} from '../../controllers/locationController';
const router = express();

// add a bus stop
// post request
// /api/bus-stop/add
router.post('/add', addNewLocation);

// get bus stops near  locaation
// get request
// /api/bus-stop/near/?lon=lon&lat=lat
router.get('/near', getNearBusStop);

// edit location
// patcch requeest
// /api/bus-stop/edit/?bus_stop_id=_id
router.patch('/edit', editLocation);

// delete location
// delete request
// /api/bus-stop/delete/?bus_stop_id=_id
router.delete('/delete', deleteLocation);

export default router;
