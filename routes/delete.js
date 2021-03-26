const Router = require('express')

const Bike = require('../models/bike')

const router = Router()

router.post('/', async (req, res) => {
    try {
        await Bike.findByIdAndDelete(req.body.id)

        res.send('success')
    } catch (e) {
        res.send('Error')

        console.log(e)
    }
})

module.exports = router