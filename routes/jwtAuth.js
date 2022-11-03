const express = require('express')
const generate = require('../utility/tokenGeneration') // destoryed the {}
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        if(!req.headers.xToken) {
            const number = generate() // or add {} to generate
            return res.json({token: number}).status(200)
        }

    } catch (error) {
        console.error(error.message)
    }
})

module.exports = router

