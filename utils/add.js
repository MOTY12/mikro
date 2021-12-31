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

    getuniquecontactlist() {

    }

}


module.exports = addPhonebook