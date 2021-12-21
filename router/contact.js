const express = require('express')
const router = express()
const { addcontact, getallcontact, getuniquenumber } = require(`../controllers/contact`)

router.post('/Addcontact', addcontact)
router.get('/getallcontact', getallcontact)
router.get('/getuniquenumber', getuniquenumber)


module.exports = router