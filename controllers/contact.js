// const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const ErrorHandler = require("../utils/errorhandler")
const Contact = require("../model/contact")
const ApiFeatures = require("../utils/apifeatures");

const addcontact = async(req, res) => {
    // const { fullName, email, phonenumber } = req.body;
    const addcontact = {
        fullName: req.body.fullName,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
    }
    const motyety = addcontact.phoneNumber
        // const numberalreadyexist = await Contact.findOne({ motyety })
        // console.log(numberalreadyexist)
        // if (numberalreadyexist) {
        //     res.send(`Number already exist`)
        // }

    const contactsaved = await Contact.create(addcontact)

    if (!contactsaved) return res.send('not save')
    res.send(contactsaved)

}


const getuniquenumber = async(req, res) => {

    var response = [];
    if (req.query.phonenumber) {
        response = await Contact.find({ phonenumber: req.query.phonenumber });
        res.json(response);
    } else {
        res.json('no number found')
    }
}

const getallcontact = async(req, res) => {
    const getallphonenumber = await Contact.find()
    if (!getallphonenumber) {
        res.status(500).json({ success: false })
    }
    res.send(getallphonenumber);
}

module.exports = { addcontact, getallcontact, getuniquenumber }