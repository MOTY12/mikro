class addPhonebook {
    constructor() {
        this.ContactList = []
    }


    storeContact(addcontact) {
        this.addcontact = addcontact;
        const moty = this.ContactList.push(addcontact);
        console.log(moty)

    }

    fetchContact() {
        return this.ContactList
    }

    getuniquecontactlist(phoneNumber) {
        let response = [];

        if (phoneNumber) {
            let findPhonenumber = phoneNumber
            response = this.ContactList.find((Contact) => Contact.phonenumber === findPhonenumber);
            // console.log(response);
        }
    }

}


module.exports = addPhonebook