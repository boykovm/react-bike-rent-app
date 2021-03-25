const Router = require('express')

const Bike = require('../models/bike')
const User = require('../models/user')

const router = Router()

router.post('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    const bike = await Bike.findByIdAndUpdate(req.body.id, {available: false})

    const bikes = user.rentedBikes.map(el => el)

    // bikes.push({rentStarted: ,...bike})
    const date = new Date()
    console.log(bike)
    bikes.push({
        _id: bike._id,
        name: bike.name,
        type: bike.type,
        price: bike.price,
        rentStarted: date,
    })
    // console.log(bikes)

    await User.findByIdAndUpdate(req.params.id, {rentedBikes: bikes})
    // await Bike.findByIdAndUpdate()

    res.send(bikes)
    // try {
    //     await Bike.findByIdAndUpdate(req.body.id, {available: false})
    //
    //     res.send('success')
    //
    // } catch (e) {
    //     console.log(e)
    // }
})

module.exports = router