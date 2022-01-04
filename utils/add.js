class addPhonebook {
    constructor() {
        this.ContactList = []
    }


    storeContact(addcontact) {
        let findPhonenumber = addcontact.phoneNumber
        const response = this.ContactList.find(({phonenumber}) => phonenumber === findPhonenumber);
        if (response) {
            // remove contact
            let index = this.ContactList.indexOf(response);
            this.ContactList.splice(index, 1);
        }
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
            response = this.ContactList.find(({phonenumber}) => phonenumber === findPhonenumber);
            // console.log(response);
        }
    }

}


module.exports = addPhonebook