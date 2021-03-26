const Router = require('express')

const Bike = require('../models/bike')
const User = require('../models/user')

const router = Router()

router.post('/:id', async (req, res) => {
    if (req.params.id) {
        const bikeId = req.body.id
        // console.log(bikeId)

        const user = await User.findById(req.params.id)
        // console.log(user)

        const bikes = user.rentedBikes.map(el => el)
        // console.log(bikes.length)
        const rentedBikes = bikes.filter(el => el._id != bikeId)

        // console.log(rentedBikes.length)
        try {
            await Bike.findByIdAndUpdate(req.body.id, {available: true})
            await User.findByIdAndUpdate(req.params.id, {rentedBikes: rentedBikes})

            res.send('success')

        } catch (e) {
            console.log(e)
        }
    } else {
        res.send('Invalid userId')
    }



})

module.exports = router