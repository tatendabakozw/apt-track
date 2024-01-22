import express from 'express';
const router = express();

// get all info from module
// get request
// /api/geocoder/get
router.get('/get', async (req, res, next) => {
  try {
    const response = req.body
    console.log(req.body)
    return res.status(200).send({message: 'Sucessfull response', data: response})
  } catch (error) {
    next(error);
  }
});

export default router;
