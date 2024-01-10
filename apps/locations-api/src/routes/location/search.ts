import express from 'express';
const router = express();

router.get('/locations', async (req, res, next) => {
  try {
    console.log('get locations');
  } catch (error) {
    next(error);
  }
});

export default router;
