const Router = require('express')

const Bike = require('../models/bike')

const router = Router()

router.post('/', async (req, res) => {
    try {
        await Bike.findByIdAndDelete(req.body.id)

        res.send('success')
    } catch (e) {
        console.log(e)
    }
})

module.exports = router