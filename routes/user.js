const {Router} = require('express')

const router = Router()

const User = require('../models/user')

// router.get('/current/:id', async (req, res) => {
//
//
//     res.send('Success')
// })

router.post('/current', async (req, res) => {
    const user = new User({
        name: req.body.name
    })

    console.log(user)

    try {
        await user.save()
        res.send(user._id)
    } catch (e) {
        console.log(e)
    }

})

module.exports = router