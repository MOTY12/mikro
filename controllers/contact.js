let ContactList = [{
        "fullName": "mukhtar yusuf",
        "email": "mukhtar2944",
        "phonenumber": "08033033774"
    }, {
        "fullName": " yusuf",
        "email": "mukhtar2944",
        "phonenumber": "08033472025"
    },
    {
        "fullName": " yusuf",
        "email": "mukhtar2944",
        "phonenumber": "08033457774"
    }
]


const addcontact = async(req, res) => {
    const addcontact = req.body
    ContactList.push(addcontact)

    res.send(`number ${addcontact.phonenumber} is added to the database`)

}

const getuniquenumber = async(req, res) => {

    var response = [];

    if (req.query.phonenumber) {
        let phonenumber = req.query.phonenumber
        response = ContactList.find((Contact) => Contact.phonenumber === phonenumber);
        res.send(response);
    }
}

const getallcontact = async(req, res) => {
    res.send(ContactList);
}



module.exports = { addcontact, getallcontact, getuniquenumber }