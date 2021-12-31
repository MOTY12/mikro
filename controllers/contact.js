const addPhonebook = require(`../utils/add`)

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

    let response = [];

    if (req.query.phonenumber) {
        let phonenumber = req.query.phonenumber
        response = ContactList.find((Contact) => Contact.phonenumber === phonenumber);
        res.send(response);
    }
}


module.exports = { addcontact, getallcontact, getuniquenumber }