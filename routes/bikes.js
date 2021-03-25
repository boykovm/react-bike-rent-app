const {Router} = require('express')

const router = Router()

const bodyParser = require('body-parser')

const Bike = require('../models/bike')
const User = require('../models/user')

router.get('/available', async (req, res) => {
    const bikes = await Bike.find({available: true})
    // console.log(req)
    res.send(bikes)
})

router.post('/available', async(req, res) => {
    const bike = new Bike({
        ...req.body
    })

    console.log(bike)

    try {
        await bike.save()
        res.send('Success')
    } catch (e) {
        console.log(e)
    }
});

router.get('/rent/:id', async(req, res) => {
    const user = await User.findById(req.params.id)
    res.send(user.rentedBikes)
})
router.post('/rent/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    const bikes = user.rentedBikes

    console.log(bikes)

    res.send('rent')
})

module.exports = router;