<<<<<<< HEAD
const addPhonebook = require(`../utils/add`)
=======
let ContactList = []
>>>>>>> 93b390cb0970f434ae4d9a3ced28a91567b03a0a

let storePhonebok = new addPhonebook()

const addcontact = async(req, res) => {
    const addcontact = req.body

    let contactsaved = storePhonebok.storeContact(addcontact)
    res.status(200).send(contactsaved)

}


const getallcontact = async(req, res) => {
    const allcontac = storePhonebok.fetchContact()
    res.status(200).send(allcontac)
}


const getuniquenumber = async(req, res) => {
    let phonenumber = req.query.phonenumber
    const uniqueNumber = storePhonebok.getuniquecontactlist(phonenumber)
    console.log(uniqueNumber)

}


module.exports = { addcontact, getallcontact, getuniquenumber }
