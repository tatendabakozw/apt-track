import express from 'express'
const router = express()

// get all users
router.get('/all', async(req, res, next)=>{
    try {
        console.log('get all users')
    } catch (error) {
        next(error)
    }
})

// get single user
// get request
// /api/user/single/get
router.get('/single', async (req, res, next)=>{
    try {
        console.log('get single user')
    } catch (error) {
        next(error)
    }
})

// edit single user
// patch requerst
// /api/user/edit
router.patch('/single', async(req, res, next)=>{
    try {
        console.log('edit single user')
    } catch (error) {
        next(error)
    }
})

export default router


